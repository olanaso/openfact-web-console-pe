import { Navigation } from './models/navigation';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Broadcaster,
  Notifications,
  Notification,
  NotificationType
} from '../ngx-base';
import {
  User,
  UserService
} from '../ngx-login-client';

import { Context } from './contexts/context';
import { Contexts } from './contexts/contexts';
import { ContextTypes } from './contexts/context-types';
import { Company } from './models/company';
import { CompanyService } from './companies/company.service';
import { UBLDocument } from './models/ubl-document';
import { UBLDocumentService } from './documents/ubl-document.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/distinctUntilKeyChanged';

interface RawContext {
  user: any;
  company: any;
  document: any;
  url: string;
}

/*
 * A shared service that manages the users current context. The users context is defined as the
 * user (user or org) and space that they are operating on.
 *
 */
@Injectable()
export class ContextService implements Contexts {

  private _recent: ConnectableObservable<Context[]>;
  private _current: Subject<Context> = new ReplaySubject<Context>(1);
  private _default: ConnectableObservable<Context>;

  constructor(
    private router: Router,
    private broadcaster: Broadcaster,
    private companyService: CompanyService,
    private userService: UserService,
    private notifications: Notifications,
    private route: ActivatedRoute,
    private documentService: UBLDocumentService) {

    // Initialize the default context when the logged in user changes
    this._default = this.userService.loggedInUser
      // First use map to convert the broadcast event to just a username
      .map(val => {
        if (!(val && val.id)) {
          // this is a logout event
        } else if (val.username) {
          return val.username;
        } else {
          this.notifications.message({
            message: 'Something went badly wrong. Please try again later or ask for help.',
            type: NotificationType.DANGER
          } as Notification);
          console.log('No username attached to user', val);
          throw new Error('Unknown user');
        }
      })
      .distinctUntilChanged()
      // Then, perform another map to create a context from the user
      .switchMap(val => this.userService.searchUserByUsername(val))
      .map(val => {
        if (val && val.id) {
          return {
            user: val,
            space: null,
            document: null,
            type: ContextTypes.BUILTIN.get('user'),
            name: val.username,
            path: '/' + val.id
          } as Context;
        } else {
          return {} as Context;
        }
      })
      // Ensure the menus are built
      .do(val => {
        if (val.type) {
          console.log('Default Context Changed to', val);
          this.broadcaster.broadcast('defaultContextChanged', val);
        }
      })
      .multicast(() => new ReplaySubject(1));

    // Finally, start broadcasting
    this._default.connect();
  }

  get recent(): Observable<Context[]> {
    return this._recent;
  }

  get current(): Observable<Context> {
    return this._current;
  }

  get default(): Observable<Context> {
    return this._default;
  }

  changeContext(navigation: Observable<Navigation>): Observable<Context> {
    const res = navigation
      // Fetch the objects from the REST API
      .switchMap(val => {
        if (val.company) {
          // If it's a space that's been requested then load the space creator as the owner
          return this
            .loadCompany(val.company)
            .map(company => {
              return {
                user: null,
                company: company,
                document: null
              } as RawContext;
            })
            .catch((err, caught) => {
              this.notifications.message({
                message: `${val.url} not found`,
                type: NotificationType.WARNING
              } as Notification);
              console.log(`Company with id ${val.company} from path ${val.url} was not found because of ${err}`);
              return Observable.throw(`Company with id ${val.company} from path ${val.url} was not found because of ${err}`);
            });
        } else if (val.document) {
          // If it's a document that's been requested then load the document
          return this
            .loadDocument(val.document)
            .map(document => {
              return {
                user: null,
                company: null,
                document: document
              } as RawContext;
            })
            .catch((err, caught) => {
              this.notifications.message({
                message: `${val.url} not found`,
                type: NotificationType.WARNING
              } as Notification);
              console.log(`Document ${val.document} from path ${val.url} was not found because of ${err}`);
              return Observable.throw(`Document ${val.document} from path ${val.url} was not found because of ${err}`);
            });
        } else {
          // Otherwise, load the user and use that as the owner
          return this
            .loadUser(val.user)
            .map(user => {
              return {
                user: user,
                company: null,
                document: null
              } as RawContext;
            })
            .catch((err, caught) => {
              this.notifications.message({
                message: `${val.url} not found`,
                type: NotificationType.WARNING
              } as Notification);
              console.log(`Owner ${val.user} from path ${val.url} was not found because of ${err}`);
              return Observable.throw(`Owner ${val.user} from path ${val.url} was not found because of ${err}`);
            });
        }
      })
      // Use a map to convert from a navigation url to a context
      .map(val => this.buildContext(val))
      .distinctUntilKeyChanged('path')
      // Broadcast the spaceChanged event
      .do(val => {
        if (val) {
          console.log('Context Changed to', val);
          this.broadcaster.broadcast('contextChanged', val);
        }
      })
      .do(val => {
        if (val && val.company) {
          console.log('Company Changed to', val);
          this.broadcaster.broadcast('companyChanged', val.company);
        }
      })
      .do(val => {
        if (val && val.document) {
          console.log('Document Changed to', val);
          this.broadcaster.broadcast('documentChanged', val.document);
        }
      })
      .do(val => {
        this._current.next(val);
      })
      .multicast(() => new Subject());
    res.connect();
    return res;
  }

  private buildContext(val: RawContext) {
    // TODO Support other types of user
    let c: Context;
    if (val.company) {
      c = {
        'user': null,
        'company': val.company,
        'type': null,
        'name': null,
        'path': null
      } as Context;
      c.type = ContextTypes.BUILTIN.get('company');
      c.path = '/_company/' + c.company.id;
      c.name = c.company.name;
    } else if (val.document) {
      c = {
        'user': null,
        'space': null,
        'document': val.document,
        'type': null,
        'name': null,
        'path': null
      } as Context;
      c.type = ContextTypes.BUILTIN.get('document');
      // TODO replace path with username once parameterized routes are working
      c.path = '/_home/' + c.document.id;
      c.name = c.document.assignedId;
    } else if (val.user) {
      c = {
        'user': val.user,
        'space': null,
        'type': null,
        'name': null,
        'path': null
      } as Context;
      c.type = ContextTypes.BUILTIN.get('user');
      // TODO replace path with username once parameterized routes are working
      c.path = '/' + c.user.id;
      c.name = c.user.username;
    } // TODO add type detection for organization and team

    if (c.type != null) {
      return c;
    }
  }

  private loadUser(userId: string): Observable<User> {
    return this.userService
      .searchUserByUserId(userId)
      .map(val => {
        if (val && val.id) {
          return val;
        } else {
          throw new Error(`No user found for ${userId}`);
        }
      });
  }

  private loadDocument(documentId: string): Observable<UBLDocument> {
    return this.documentService
      .searchDocumentById(documentId)
      .map(val => {
        if (val && val.id) {
          return val;
        } else {
          throw new Error(`No document found for ${documentId}`);
        }
      });
  }

  private loadCompany(spaceId: string): Observable<Company> {
    if (spaceId) {
      return this.companyService.searchCompanyById(spaceId);
    } else {
      return Observable.of({} as Company);
    }
  }

}
