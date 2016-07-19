import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})

export class Highlight {
  // private _defaultColor = 'red';
  // private el: HTMLElement;

  // constructor(el: ElementRef) { this.el = el.nativeElement; }

  //  @Input('myHighlight') highlightColor: string;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this._defaultColor);
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }

  // private highlight(color: string) {
  //   this.el.style.backgroundColor = color;
  // }
}