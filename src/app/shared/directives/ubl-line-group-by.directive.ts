import { AfterContentChecked, ContentChildren, Directive, EventEmitter, OnInit, Output, QueryList, forwardRef } from '@angular/core';

import { NgControl } from '@angular/forms';
import { UblLineGroupDirective } from './ubl-line-group.directive';

@Directive({
  selector: '[ofUblLineGroupBy]'
})
export class UblLineGroupByDirective implements AfterContentChecked {

  @Output()
  ofOnChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(UblLineGroupDirective)
  children: QueryList<UblLineGroupDirective>;

  constructor() { }

  ngAfterContentChecked() {
    console.log(this.children);
    console.log(this.children.map(f => f.ofUblLineGroup));
  }

  refreshValues() {
    this.ofOnChange.emit("resfrescando");
  }

}

