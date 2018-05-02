import { Component } from '@angular/core';
import { NotificationsService } from './ngx-base';

@Component({
  selector: 'of-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'of';

  constructor(public notifications: NotificationsService) {
  }

}
