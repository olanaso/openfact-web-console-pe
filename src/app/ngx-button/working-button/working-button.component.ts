import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'of-working-button',
  templateUrl: './working-button.component.html',
  styleUrls: ['./working-button.component.scss']
})
export class WorkingButtonComponent implements OnInit {

  @Input() type = 'button';

  @Input() working;
  @Input() active = true;

  @Input() label;
  @Input() workingLabel;

  constructor() { }

  ngOnInit() {
  }

}
