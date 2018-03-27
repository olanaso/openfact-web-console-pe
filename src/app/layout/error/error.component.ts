import {
  Component,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/operators/map';
import { Subscription } from 'rxjs/Subscription';

import { ErrorService } from './error.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'of-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy {

  message = '';
  subscription: Subscription;
  hideBanner: boolean;
  companyLink: string;
  userSubscription: Subscription;

  constructor(
    private errorService: ErrorService,
    router: Router) {
    this.subscription = this.errorService.update$.subscribe(
      message => {
        this.message = message;
      });

    this.companyLink = '/_companies';

  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
