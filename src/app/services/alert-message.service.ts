import { Injectable } from '@angular/core';
import { AlertModel } from '../models/alert-model';

@Injectable()
export class AlertMessageService {

  alerts: Array<AlertModel>;

  constructor() {
    this.alerts = [];
  }

  addAlert(alert) {
    this.alerts.push(alert);
  }
  
  getAlerts() {
    return this.alerts;
  }
  
  clearAlerts() {
    this.alerts = [];
  }
  
}
