import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

import {Alert} from './alert';

@Injectable()
export class AlertService {

  addAlert: Observable<Alert>;
  private _addAlert: Observer<Alert>;

  clearAlerts: Observable<IClearWrapper>;
  private _clearAlerts: Observer<IClearWrapper>;

  constructor() {
    this.addAlert = new Observable<Alert>(observer => this._addAlert = observer).share();
    this.clearAlerts = new Observable<IClearWrapper>(observer => this._clearAlerts = observer).share();
  }

  pop(type: string | Alert, message?: string, details?: string): Alert {
    let alert = typeof type === 'string' ? { type: type, message: message, details: details } : type;

    alert.alertId = Guid.newGuid();

    if (!this._addAlert) {
      throw new Error("No Alert Containers have been initialized to receive alerts.");
    }

    this._addAlert.next(alert);
    return alert;
  }

  popAsync(type: string | Alert, title?: string, body?: string): Observable<Alert> {
    setTimeout(() => {
      this.pop(type, title, body);
    }, 0);

    return this.addAlert;
  }

  clear(alertId?: string, alertContainerId?: number) {
    let clearWrapper: IClearWrapper = {
      alertId: alertId,
      alertContainerId: alertContainerId
    };

    this._clearAlerts.next(clearWrapper)
  }

}

export interface IClearWrapper {
  alertId?: string;
  alertContainerId?: number;
}

class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}