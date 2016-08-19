import {Injectable} from '@angular/core';
import {Alert} from './alert';

@Injectable()
export class AlertMessageService {

  private alerts: Array<Alert>;

  constructor() {
    this.alerts = [];
  }

  public addAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  public getAlerts() {
    return this.alerts;
  }

  public clearAlerts() {
    this.alerts = [];
  }

}
