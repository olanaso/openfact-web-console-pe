import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, InvoiceModel, INVOICE_TYPE, ADDITIONAL_IDENTIFICATION_ID, TOTAL_TAX, TAX_REASON, DocumentModel, LineModel, DataService} from '../../../services';
import {Alert, AlertService} from '../../../shared';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-create-invoice',
  templateUrl: 'create-invoice.component.html',
  styleUrls: ['create-invoice.component.css'],
  directives: [TOOLTIP_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  InvoicesTypes: Array<DocumentModel> = [];
  additionalAccountIds: Array<DocumentModel> = [];
  totalTaxes: Array<DocumentModel> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.invoice = this.dataService.invoices().build();
  }

  ngOnInit() {
    this.buildForm();
    this.loadAdditionalAccountIds();
    this.loadInvoicesType();
    this.loadData();
    this.loadTotalTax();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      type: ['', [Validators.required]],
      invoiceSeries: ['', [Validators.required]],
      invoiceNumber: ['', []],
      issueDate: ['', [Validators.required]],
      customer: this.formBuilder.group({
        assignedIdentificationId: ['', Validators.minLength(3)],
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

  loadTotalTax() {
    this.organization.getDocuments(TAX_REASON).subscribe(result => {
      this.totalTaxes = result;
      console.log(JSON.stringify(this.totalTaxes));

    });
  }

  loadInvoicesType() {
    this.organization.getDocuments(INVOICE_TYPE).subscribe(result => {
      this.InvoicesTypes = result;
    });
  }
  loadAdditionalAccountIds() {
    this.organization.getDocuments(ADDITIONAL_IDENTIFICATION_ID).subscribe(result => {
      this.additionalAccountIds = result;
    });
  }

  setSubmitted(submitted: boolean) {
    this.submitted = submitted;
  }

  addLine() {
    this.invoice.lines.push(new LineModel());
    this.calculateTotal();
  }

  save() {
    if (this.invoice.lines.length > 0) {
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
    } else {
      this.alertService.pop('warning', 'Detalla de factura', 'Este comprobante de pago debe contener por lo menos un detalle.');
    }

  }

  calculateTotal() {
    if (this.state) {
      this.invoice.totalByFree = 0;
      this.invoice.lines.forEach(line => {
        this.invoice.totalByFree += (line.ammount * line.quantity);
        //console.log(line.ammount);
      });
      this.invoice.totalAmmount = 0;
      this.invoice.totalTaxed = 0;
      this.invoice.totalUnaffected = 0;
      this.invoice.totalExonerated = 0;
      this.invoice.totalIgvTax = 0;
      this.invoice.totalDiscounted = 0;
    } else {
      this.invoice.totalAmmount = 0;
      this.invoice.lines.forEach(line => {
        this.invoice.totalAmmount += (line.ammount * line.quantity);
        //console.log(line.ammount);
      });
      this.invoice.totalIgvTax = this.invoice.totalAmmount * this.defaultIgv;
      this.invoice.totalTaxed = this.invoice.totalAmmount - this.invoice.totalIgvTax;

      this.invoice.totalByFree = 0;
    }
  }
  reset() {
    this.loadData();
  }
  deleteLine(line: LineModel) {
    let index = this.invoice.lines.indexOf(line, 0);
    if (index > -1) {
      this.invoice.lines.splice(index, 1);
    }
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
    this.state = arg;
  }
  onSelectCurrency(currency: string) {
    this.invoice.currencyCode = currency;

  }
  eventHandler(event) {
    this.calculateTotal();
  }
  deleteInvoice(invoice: InvoiceModel) {
    console.log("Tratando de eliminar facturas.");
  }
}