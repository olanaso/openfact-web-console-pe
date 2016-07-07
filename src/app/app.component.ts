import { Component } from '@angular/core';
import { TopAreaComponent } from './shared/top-area';
import {ViewEncapsulation} from '@angular/core';
import { CenterAreaComponent } from './shared/center-area';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TopAreaComponent], 
  styleUrls: ['app.component.css','PatternFly/css/patternfly.css','PatternFly/css/patternfly-additions.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

}
