import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { SUNATGenericType } from './../../../ngx-openfact';
import { DocumentContextService } from '../documents-context.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IgvResolver implements Resolve<SUNATGenericType> {

  private _lastRoute: string;

  constructor(private documentContext: DocumentContextService, private router: Router) {
    // The default place to navigate to if the context cannot be resolved
    this._lastRoute = '/_error';
    this.router.errorHandler = (err) => {
      this.router.navigateByUrl(this._lastRoute);
    };

    // Store the last visited URL so we can navigate back if the context
    // cannot be resolved
    this.router.events
      .filter((e) => e instanceof NavigationEnd)
      .map((e: NavigationEnd) => e.urlAfterRedirects)
      .subscribe((val) => this._lastRoute = val);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SUNATGenericType> {
    return this.documentContext.loadIGV()
      .first()
      .catch((err: any, caught: Observable<SUNATGenericType>) => {
        console.log(`No se pudo cargar el valor del IGV`);
        return Observable.throw(err);
      });;
  }

}
