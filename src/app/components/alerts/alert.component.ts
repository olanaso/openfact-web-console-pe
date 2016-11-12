import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Alert, AlertLink } from './alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;
  @Output() public clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(event, alert: Alert) {
    event.stopPropagation();
    this.clickEvent.emit({
      value: { alert: alert, isCloseButton: true }
    });
  }

  onLinkClick(alert: Alert, link: AlertLink) {
    if (link.onClickCallback) {
      if (typeof link.onClickCallback === "function") {
        link.onClickCallback(alert);
      } else {
        console.log("The alert link click handler is not a callable function.");
        return false;
      }
    }
  }

}
