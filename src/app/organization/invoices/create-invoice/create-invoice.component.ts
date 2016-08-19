import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
// import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap';
// import {CORE_DIRECTIVES} from '@angular/common';
// import {FORM_DIRECTIVES} from '@angular/forms';
// import * as moment from 'moment';

import {OrganizationModel, InvoiceModel, LineModel, DataService} from '../../../services';
import {Alert, AlertMessageService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-create-invoice',
  templateUrl: 'create-invoice.component.html',
  styleUrls: ['create-invoice.component.css']
  //directives: [DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CreateInvoiceComponent implements OnInit {

  private state: boolean = false;
  private disable: boolean = false;

  private defaultIgv: number = 0.18;
  private defaultCUrrency: string = "PEN";

  private organization: OrganizationModel;
  private invoice: InvoiceModel;

  form: FormGroup;
  working: boolean = false;
  submitted: boolean = false;

  public dt: Date = new Date();

  alerts: Array<Alert> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertMessageService: AlertMessageService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.invoice = this.dataService.invoices().build();
  }

  ngOnInit() {
    this.loadAlerts();
    this.buildForm();
    this.loadData();
  }

  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert);
    });
    this.alertMessageService.clearAlerts();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      type: ['', []],
      invoiceSeries: ['', []],
      invoiceNumber: ['', []],
      issueDate: ['', []],
      customer: this.formBuilder.group({
        assignedIdentificationId: [''],
        additionalAccountId: [''],
        registrationName: [''],
        email: ['']
      })
    });
  }

  loadData() {
    /*let address = <PostalAddress>(this.organization.postalAddress || {});
    (<FormControl>this.form.controls['streetName']).setValue(address.streetName);
    (<FormControl>this.form.controls['citySubdivisionName']).setValue(address.citySubdivisionName);
    (<FormControl>this.form.controls['cityName']).setValue(address.cityName);
    (<FormControl>this.form.controls['countrySubentity']).setValue(address.countrySubentity);
    (<FormControl>this.form.controls['district']).setValue(address.district);
    (<FormControl>this.form.controls['countryIdentificationCode']).setValue(address.countryIdentificationCode);*/
    //this.calculateTotal();
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  addLine() {
    this.invoice.lines.push(new LineModel());
    this.calculateTotal();
  }

  save() {
    // this.invoice.totalDiscounted = 0;
    // this.invoice.totalAmmount = 0;
    // this.invoice.totalUnaffected = 0;
    // this.invoice.totalExonerated = 0;
    // this.invoice.totalByFree = 0;

    // this.invoice.totalIgvTax = 0;
    // this.invoice.currencyCode = "PEN";
    // this.invoice.totalTaxed = 0;

    this.dataService.invoices().create(this.organization, this.invoice).subscribe(
      result => {
        this.alerts.push({
          type: 'success',
          message: 'Success',
          details: 'Success! The invoice has been created.'
        });
        this.working = false;
        let link = ['../invoices'];
        console.log(this.router.url);
        this.router.navigate(link);
      },
      error => {
        this.working = false;
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Invoice could not be created.'
        });
      }
    );
  }

  calculateTotal() {
    this.invoice.totalAmmount = 0;
    this.invoice.lines.forEach(line => {
      this.invoice.totalAmmount += (line.ammount * line.quantity);
      //console.log(line.ammount);
    });
    this.invoice.totalIgvTax = this.invoice.totalAmmount * this.defaultIgv;
    this.invoice.totalTaxed = this.invoice.totalAmmount - this.invoice.totalIgvTax;
    //this.invoice.lines
  }
  reset() {
    this.loadData();
  }
  deleteLine(line: LineModel) {
    let index = this.invoice.lines.indexOf(line, 0);
    //console.log("Delete object: " + JSON.stringify(line));
    if (index > -1) {
      this.invoice.lines.splice(index, 1);
    }
    this.calculateTotal();
  }
  onchange() {
    this.calculateTotal();
  }
  onChangeToogle(arg) {
    if (arg) {
      this.invoice.totalByFree = this.invoice.totalAmmount;
      this.invoice.totalAmmount = 0;
      this.invoice.totalTaxed = 0;
      this.invoice.totalUnaffected = 0;
      this.invoice.totalExonerated = 0;
      this.invoice.totalIgvTax = 0;
      this.invoice.totalDiscounted = 0;
    } else {
      this.invoice.totalByFree = 0;
      this.calculateTotal();
    }
    //console.log(arg);
  }
  onSelectCurrency(currency: string) {
    this.invoice.currencyCode = currency;
  }
}
