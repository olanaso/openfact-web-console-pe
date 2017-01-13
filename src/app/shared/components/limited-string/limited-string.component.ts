import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'of-limited-string',
  templateUrl: './limited-string.component.html',
  styleUrls: ['./limited-string.component.scss']
})
export class LimitedStringComponent implements OnInit {

  @Input()
  value: string;

  @Input()
  maxlength: number;

  currentMaxlength: number;

  constructor() { }

  ngOnInit() {
    this.currentMaxlength = this.maxlength;
  }

  readMore() {
    this.currentMaxlength = this.value.length;
  }
}
