import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import {NgClass} from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'toggle-button',
  templateUrl: 'toggle-button.component.html',
  styleUrls: ['toggle-button.component.css']
  //directives: [NgClass]
})
export class ToggleButtonComponent implements OnInit {

  @Input() on = true;
  @Output() onChange = new EventEmitter();
  @Input() disable = false;
  state: boolean = true;

  onClick() {
    this.on = !this.on;
    this.onChange.emit(this.on);
    //this.classMap = { 'class1': true, 'class2': false };
  }

  constructor() {
    // this.classMap = { 'class1': true, 'class2': false };
    console.log("holaaaa aqui en disabled: " + this.disable);


  }

  ngOnInit() {

  }

  // onChange(event:any){
  //   console.log(event.target.value);    
  // }

}
