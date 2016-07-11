import { Component } from '@angular/core';
import { TopAreaComponent } from './shared/top-area';
import {ViewEncapsulation} from '@angular/core';
import { CenterAreaComponent } from './shared/center-area';
//import { SidebarAreaComponent } from './shared/center-area/sidebar-area';
//import { routes} from './app.routes';
import { ROUTER_DIRECTIVES} from '@angular/router';

//import { ModuleFacturaComponent } from './documentos-electronicos/module-factura/module-factura.component';
import { DocumentosElectronicosComponent } from './documentos-electronicos/documentos-electronicos.component';


// import { SidebarAreaComponent } from './shared/center-area/sidebar-area';
// import { ContentAreaComponent } from './shared/center-area/content-area';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // template:`
  // <h1>Component Router</h1>
  // <nav><a [routerLink]="['/factura']">Heroes</a>
  // </nav><router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES,TopAreaComponent,CenterAreaComponent], 
  styleUrls: ['app.component.css','PatternFly/css/patternfly.css','PatternFly/css/patternfly-additions.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app works!';
}
