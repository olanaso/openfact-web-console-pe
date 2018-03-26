import {
  Component,
  OnInit,
  Input,
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
  @Input() showTopBanner: boolean = true;

  /**
   * The navigation items used to build the menu
   */
  @Input() contextLabel = 'Context Selector';

  /**
   * The navigation items used to build the menu
   */
  @Input() contextItems: ContextItemConfig[];

  private explicitCollapse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
  * Handles the navbar hamburger toggle click
  */
  public handleNavBarToggleClick(): void {

  }

  selectContextItem(contextItem: ContextItemConfig) {

  }

}
