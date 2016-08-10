import { Component, OnInit, Input, DoCheck, KeyValueDiffers } from '@angular/core';

import { Alert } from '../../services/alert';
import { AlertLink } from '../../services/alert-link';

import { FilterCollectionPipe } from '../../pipes/filter-collection.pipe';

@Component({
  moduleId: module.id,
  selector: 'alerts',
  templateUrl: 'alerts.component.html',
  styleUrls: ['alerts.component.css'],
  pipes: [FilterCollectionPipe]
})
export class AlertsComponent implements OnInit {

  differ: any;
  
  @Input() alerts: Array<Alert>
  @Input() filter: any;
  @Input() hideCloseButton: boolean;
  @Input() toast: boolean;

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
    setTimeout(() => this.close(currentValue), 3000);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onChange(newValue) {
    console.log("cambio de valor de lista....");
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
