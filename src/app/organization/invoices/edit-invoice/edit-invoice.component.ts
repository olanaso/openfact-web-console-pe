import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Validators} from '@angular/common';

import {OrganizationModel, InvoiceModel, LineModel, INVOICE_TYPE, ADDITIONAL_IDENTIFICATION_ID, ADDITIONAL_INFORMATION
  , AdditionalInformationModel, DataService, DocumentModel} from '../../../services';
import {Alert, AlertService} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-edit-invoice',
  templateUrl: 'edit-invoice.component.html',
  styleUrls: ['edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  private sub: any;
  private id: string;

  private invoice: InvoiceModel = new InvoiceModel();
  private organization: OrganizationModel;
  alerts: Array<Alert> = [];
  form: FormGroup;
  InvoicesTypes: Array<DocumentModel> = [];
  additionalAccountIds: Array<DocumentModel> = [];
  listTypeIgv: Array<DocumentModel> = [];

  working: boolean = false;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
  }

  ngOnInit() {
    //this.invoice.getList();
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      //console.log("Recuperando el ID: " + this.id);
      // In a real app: dispatch action to load the details here.
    });
    //console.log("Organization select :" + JSON.stringify(this.organization));
    this.buildForm();
    this.loadInvoice();
    this.loadInvoicesType();
    this.loadAdditionalAccountIds();
    this.loadAditionalInformation();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      type: ['', []],
      invoiceSeries: ['', []],
      invoiceNumber: ['', []],
      issueDate: ['', []],
      customer: this.formBuilder.group({
        assignedIdentificationId: ['', [Validators.minLength(3), Validators.required]],
        additionalIdentificationId: [''],
        registrationName: [''],
        email: ['']
      })
    });
  }

  loadInvoice() {
    this.dataService.invoices().findById(this.organization, this.id).subscribe(
      result => {
        this.invoice = result;
        this.invoice.getLines().subscribe(
          result =>
            this.invoice.lines = (result || [])
        );
      },
      error => {
        this.alerts.push({
          type: 'error',
          message: 'Error',
          details: 'Invoices could not be loaded.'
        });
      }
    );
  }
  loadAditionalInformation() {
    this.organization.getDocuments(ADDITIONAL_INFORMATION).subscribe(result => {
      //this.aditionalInformations = result;
      result.forEach(element => {
        element.childrens.forEach(child => {
          child.documentIdSuper = element.name
          this.listTypeIgv.push(child);
        });
        this.listTypeIgv = this.listTypeIgv.sort();
      });
    });
  }
  onSelectCurrency(currency: string) {
    this.invoice.currencyCode = currency;
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
  save() {
    console.log("antes de grabar...");

    this.working = true;
    this.invoice.lines.forEach(element => {
      element.totalTaxs.forEach(child => {
        delete child.checked;
      });
      delete element.ammountExtension;
    });

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


}
