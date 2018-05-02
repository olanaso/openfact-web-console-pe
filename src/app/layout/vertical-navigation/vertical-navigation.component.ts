import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ContextItemConfig } from './context-item-config';

@Component({
  selector: 'of-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss']
})
export class VerticalNavigationComponent implements OnInit {

  /**
   * Show top banner, default: true
   */
  @Input() showTopBanner = true;

  /**
   * The navigation items used to build the menu
   */
  @Input() contextLabel = 'Context Selector';

  /**
   * The navigation items used to build the menu
   */
  @Input() contextItems: ContextItemConfig[];

  @Output() toggleNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  private collapsed = false;

  constructor() { }

  ngOnInit() {
  }

  /**
  * Handles the navbar hamburger toggle click
  */
  public handleNavBarToggleClick(): void {
    this.collapsed = !this.collapsed;
    this.toggleNavBar.emit(this.collapsed);
  }

  selectContextItem(contextItem: ContextItemConfig) {

  }

}
