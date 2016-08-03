import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button-save',
  templateUrl: 'button-save.component.html',
  styleUrls: ['button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {

  @Input() working: boolean = false;

  constructor() { }

  ngOnInit() {   
  }

}
