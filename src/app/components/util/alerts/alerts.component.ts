import { Component, OnInit, Input, DoCheck, KeyValueDiffers} from '@angular/core';

import { Alert } from '../../../services/alert';
import { AlertLink } from '../../../services/alert-link';

import { FilterCollectionPipe } from '../../../pipes/filter-collection.pipe';
import { AlertMessageService } from '../../../services/alert-message.service';

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
  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);    
  }

  ngDoCheck() {
    var changes = this.differ.diff(this.alerts);
    if (changes) {
     // console.log('changes detected');
      //changes.forEachChangedItem(r => this.changeItemAlert(r.currentValue));
      changes.forEachAddedItem(r => this.addItemAlert(r.currentValue));
      //changes.forEachRemovedItem(r => console.log('removed ' + JSON.stringify(r.currentValue)));
    } else {
      //console.log('nothing changed');
    }
  }

  addItemAlert(currentValue: Alert) {
    //console.log('added ' + JSON.stringify(currentValue));
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
