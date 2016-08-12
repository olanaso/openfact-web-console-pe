import {Component, OnInit, Input, DoCheck, KeyValueDiffers} from '@angular/core';
import {Alert, AlertLink} from '../shared-services';

@Component({
  moduleId: module.id,
  selector: 'alerts',
  templateUrl: 'alerts.component.html',
  styleUrls: ['alerts.component.css']
})
export class AlertsComponent implements OnInit {

  differ: any;

  @Input() alerts: Array<Alert>;
  @Input() filter: any;
  @Input() hideCloseButton: boolean;
  
  @Input() floating: boolean = true;
  @Input() toast: boolean;

  @Input() timeout: number = 5000;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
  }

  ngDoCheck() {
    var changes = this.differ.diff(this.alerts);
    if (changes) {
      changes.forEachAddedItem(r => this.addItemAlert(r.currentValue));
    }
  }

  addItemAlert(currentValue: Alert) {
    setTimeout(() => this.close(currentValue), this.timeout);
  }

  ngOnInit() {

  }

  close(alert: Alert) {
    alert.hidden = true;
    if (alert.onClose != null) {
      alert.onClose();
    }
  }

  onClick(alert: Alert, link: AlertLink) {
    if (link.onClick != null) {
      let close = link.onClick();
      if (close) {
        alert.hidden = true;
      }
    }
  }

}
