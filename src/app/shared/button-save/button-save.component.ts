import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

import {Alert, AlertMessageService} from '../shared-services';

@Component({
  moduleId: module.id,
  selector: 'button-save',
  templateUrl: 'button-save.component.html',
  styleUrls: ['button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() working: boolean = false;
  @Input() alerts: Array<Alert>;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit() {    
  }

  onClickChild(event) {
    if (!this.form.valid) {
      if (this.alerts != null) {
        this.putErrorAlerts(this.form, this.alerts);
      }
      event.preventDefault();
    }    
    this.onClick.emit(true);
  }

  private cleanAlerts(array: Array<any>) {
    array.splice(0, array.length);
  }

  private putErrorAlerts(form: FormGroup, alerts: Array<Alert>) {
    if (!form.valid) {
      this.cleanAlerts(this.alerts);

      let details = '';
      for (let key in this.form.controls) {
        let formControl = this.form.controls[key];
        if (!formControl.valid) {
          details += key + ',';
        }
      }

      if (details.length) {
        details = details.substring(0, details.length - 1);
      }

      alerts.push({
        type: 'error',
        message: 'Error on the next inputs: ',
        details: details
      });
    }
  }

  private addAlert(name: string, formControl: AbstractControl) {
    let data: Alert = {
      type: 'error',
      message: 'Error on the input values',
      details: name
    };
    this.alerts.push(data);
  }

}
