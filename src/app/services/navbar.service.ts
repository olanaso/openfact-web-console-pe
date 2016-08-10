import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavbarService {

  public isCollapsed: boolean;
  private isCollapsedSource = new Subject<boolean>();
  public isCollapsed$ = this.isCollapsedSource.asObservable();

  constructor() {

  }

  public changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedSource.next(this.isCollapsed);
  }

  public getIsCollapsed() {
    return this.isCollapsed;
  }

}
