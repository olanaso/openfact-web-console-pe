import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavbarService {

  isCollapsed: boolean;
  private isCollapsedSource = new Subject<boolean>();
  isCollapsed$ = this.isCollapsedSource.asObservable();

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedSource.next(this.isCollapsed);
  }

  getIsCollapsed() {
    return this.isCollapsed;
  }  

}
