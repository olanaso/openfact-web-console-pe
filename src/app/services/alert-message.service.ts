import { Injectable } from '@angular/core';
import { Alert } from './alert';

interface AlertMap {
  name: string;
  data: Alert;
};

@Injectable()
export class AlertMessageService {

  private alerts: Array<AlertMap>;

  constructor() {
    this.alerts = [];
  }

  addAlert(alert: AlertMap) {
    this.alerts.push(alert);
  }

  addShortAlert(type: string, message: string ) {
    this.alerts.push({
      name: '',
      data: {
        type: type,
        message: message
      }
    });
  }

  getAlerts() {
    return this.alerts;
  }

  clearAlerts() {
    this.alerts = [];
  }

}
