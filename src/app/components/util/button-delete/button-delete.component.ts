import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-button-delete',
  templateUrl: 'button-delete.component.html',
  styleUrls: ['button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  @Input() kind: String;
  
  constructor() { }

  ngOnInit() {
  }

}
