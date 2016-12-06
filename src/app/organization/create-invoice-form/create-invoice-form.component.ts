import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'of-create-invoice-form',
  templateUrl: './create-invoice-form.component.html',
  styleUrls: ['./create-invoice-form.component.scss']
})
export class CreateInvoiceFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  backWizard() {
    console.log("basck");
  }

  nextWizard() {
    console.log("next");
  }

  finishWizard() {
    console.log("finsh");
  }

  cancelWizard() {
    console.log("cancel");
  }

}
