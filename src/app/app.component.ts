import { Component } from '@angular/core';
import { TopAreaComponent } from './shared/top-area';
import {ViewEncapsulation} from '@angular/core';
import { CenterAreaComponent } from './shared/center-area';
import { ROUTER_DIRECTIVES} from '@angular/router';
//import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';

// import { SidebarAreaComponent } from './shared/center-area/sidebar-area';
// import { ContentAreaComponent } from './shared/center-area/content-area';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TopAreaComponent,CenterAreaComponent], 
  styleUrls: ['app.component.css','PatternFly/css/patternfly.css','PatternFly/css/patternfly-additions.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app works!';
}
