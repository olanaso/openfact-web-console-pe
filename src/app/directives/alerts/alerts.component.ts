import { Component, OnInit, Input } from '@angular/core';

import { Alert } from '../../models/alert';
import { AlertLink } from '../../models/alert-link';

import { FilterCollectionPipe } from '../../pipes/filter-collection.pipe';

@Component({
  moduleId: module.id,
  selector: 'alerts',
  templateUrl: 'alerts.component.html',
  styleUrls: ['alerts.component.css'],
  pipes: [FilterCollectionPipe]
})
export class AlertsComponent implements OnInit {

  @Input() alerts: Array<Alert>
  @Input() filter: any;
  @Input() hideCloseButton: boolean;
  @Input() toast: boolean;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.alerts);
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
