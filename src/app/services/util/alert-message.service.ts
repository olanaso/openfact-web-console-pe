import { Injectable } from '@angular/core';
import { Alert } from '../../models/alert';

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

  getAlerts() {
    return this.alerts;
  }

  clearAlerts() {
    this.alerts = [];
  }

}
