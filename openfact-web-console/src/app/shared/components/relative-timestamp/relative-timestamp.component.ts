import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'relative-timestamp',
  templateUrl: './relative-timestamp.component.html',
  styleUrls: ['./relative-timestamp.component.scss']
})
export class RelativeTimestampComponent implements OnInit {

  @Input() timestamp: Date;
  @Input() dropSuffix: boolean;  

  constructor() { }

  ngOnInit() {
  }

}
