import {Component, ViewContainerRef} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: []
})
export class AppComponent {
  title = 'app works!';

  constructor(private viewContainerRef: ViewContainerRef) {
  }

}
