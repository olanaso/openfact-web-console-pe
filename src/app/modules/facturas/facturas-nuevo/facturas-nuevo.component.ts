import { Component, OnInit, forwardRef, Provider } from '@angular/core';
import {CORE_DIRECTIVES, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';

import {DatePicker} from 'ng2-datepicker';

// const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
//   NG_VALUE_ACCESSOR, {
//     useExisting: forwardRef(() => FacturasNuevoComponent),
//     multi: true
//   });

export class Test {
  date: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-facturas-nuevo',
  // template: ` 
  //   <span>hola</span> 
  //   <datepicker [(ngModel)]="test.date" showWeeks="true" ></datepicker>     
  //   <datepicker [(ngModel)]="test.date" view-format="DD.MM.YYYY" model-format="YYY-MM-DD" init-date="2017-05-12"></datepicker> 
  //     `,
  templateUrl: 'facturas-nuevo.component.html',
  styleUrls: ['facturas-nuevo.component.css'],
  directives: [DatePicker, CORE_DIRECTIVES, FORM_DIRECTIVES]  
})
export class FacturasNuevoComponent implements OnInit {
  //selectDays: string = "01/01/2016";
   test:Test;//={date:"1/1/2016"};
  //  ={
  //    date : "01/01/2016"
  //  };
  constructor() {
    this.test = {date:"1/1/2016"};
    // this.test1 = Test();
  }
  ngOnInit() {

  }
}

// class App {
//   test: Test;
//   test1: Test;

//   constructor() {
//     //this.test = Test();
//     // this.test1 = Test();
//   }
// }