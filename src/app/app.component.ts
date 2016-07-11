import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './layout/header';
import { SidebarComponent } from './layout/sidebar';
import { ContainerComponent } from './layout/container';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../styles/main.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent, SidebarComponent, ContainerComponent]
})
export class AppComponent {
  title = 'app works!';
}
