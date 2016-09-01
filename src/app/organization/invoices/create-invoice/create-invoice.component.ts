import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators} from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, InvoiceModel, TotalTaxModel, TotalTaxInvoice, AdditionalInformationModel, TypeIgv, INVOICE_TYPE, ADDITIONAL_IDENTIFICATION_ID, ADDITIONAL_INFORMATION, TOTAL_TAX, TAX_REASON, DocumentModel, LineModel, DataService} from '../../../services';
import {Alert, AlertService} from '../../../shared';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
// import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-create-invoice',
  templateUrl: 'create-invoice.component.html',
  styleUrls: ['create-invoice.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],//TOOLTIP_DIRECTIVES
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
  listTypeIgv: Array<DocumentModel> = [];
  typeIgvSelect: DocumentModel;
  aditionalInformations: Array<DocumentModel> = [];
  //totalTaxs: Array<DocumentModel> = [];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.invoice = this.dataService.invoices().build();
    //console.log(JSON.stringify(this.organization));
    //console.log(this.organization);
    //console.log(this.activatedRoute);

  }

  ngOnInit() {
    this.buildForm();
    this.loadAdditionalAccountIds();
    this.loadInvoicesType();
    this.loadData();
    this.loadTotalTax();
    this.loadAditionalInformation();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      type: ['', [Validators.required]],
      //invoiceSeries: ['', [Validators.required]],
      //invoiceNumber: ['', []],
      issueDate: ['', [Validators.required]],
      customer: this.formBuilder.group({
        assignedIdentificationId: ['', Validators.minLength(3)],
        additionalIdentificationId: [''],
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
    this.organization.getDocuments(TOTAL_TAX).subscribe(result => {
      //this.invoice.totalTaxs = result;
      result.forEach(element => {
        let totalTax = new TotalTaxInvoice();
        totalTax.name = element.name;
        totalTax.value = element.value;
        totalTax.amount = 0;
        this.invoice.totalTaxs.push(totalTax);
      });
      //this.typeIgvSelect = this.listTypeIgv[0];
      //console.log(JSON.stringify(result));
    });
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
        let aditionalInformation = new AdditionalInformationModel();
        aditionalInformation.name = element.name;
        aditionalInformation.amount = 0;
        this.invoice.additionalInformation.push(aditionalInformation);
      });
      //this.typeIgvSelect = this.listTypeIgv[0];
      //console.log(JSON.stringify(this.listTypeIgv));
    });
  }
  onChangeTypeIgv(selectIgv, line: LineModel) {
    //console.log("En el onselect: " + JSON.stringify(this.listTypeIgv));
    this.listTypeIgv.forEach(element => {
      if (element.documentId == selectIgv) {
        this.typeIgvSelect = element;
        line.totalTaxs.forEach(totalTax => {
          totalTax.reason = element.name;
          totalTax.checked = element.checked;
        });
      }
    });
    this.calculateLine(line);
    this.calculateTotal();
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
    this.typeIgvSelect = this.listTypeIgv[0];
    let line = new LineModel();
    this.invoice.totalTaxs.forEach(element => {
      let totalTax = new TotalTaxModel();
      totalTax.document = element.name;
      totalTax.reason = this.typeIgvSelect.name;
      totalTax.amount = 0;
      totalTax.checked = this.typeIgvSelect.checked;
      line.totalTaxs.push(totalTax);
    });
    line.quantity = 1;
    this.invoice.lines.push(line);
    this.calculateTotal();
    //console.log(JSON.stringify(this.typeIgvSelect));
  }

  save() {
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

  calculateTotal() {
    //console.log(JSON.stringify(this.listTypeIgv));
    this.invoice.additionalInformation.forEach(element => { element.amount = 0; });
    this.invoice.totalTaxs.forEach(element => { element.amount = 0; });
    this.invoice.payableAmount = 0;
    this.invoice.lines.forEach(element => {
      let typeIgvFind: DocumentModel;
      element.totalTaxs.forEach(child => {
        //console.log("reason :" + child.reason);
        this.listTypeIgv.forEach(typeIgv => {
          if (child.reason == typeIgv.name)
            typeIgvFind = typeIgv
        });
      });
      this.invoice.additionalInformation.forEach(addInfo => {
        if (addInfo.name == typeIgvFind.documentIdSuper) {
          addInfo.amount = addInfo.amount + element.price;
        }
      });

      this.invoice.payableAmount = this.invoice.payableAmount + (element.amount * element.quantity);
    });
    this.invoice.totalTaxs.forEach(element => {
      this.invoice.lines.forEach(lines => {
        //console.log(JSON.stringify(lines));
        lines.totalTaxs.forEach(taxs => {
          if (element.name == taxs.document) {
            // console.log(element.amount + "+" + taxs.amount);
            element.amount = element.amount + taxs.amount;
          }
        });
      });
    });
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
  onSelectCurrency(currency: string) {
    this.invoice.currencyCode = currency;
  }
  eventHandler(event, line: LineModel) {
    //console.log("Event Handler : " + JSON.stringify(line));
    this.calculateLine(line);
    this.calculateTotal();
  }
  calculateLine(line: LineModel) {
    line.totalTaxs.forEach(element => { element.amount = 0; });
    this.invoice.totalTaxs.forEach(element => {
      line.totalTaxs.forEach(taxsChild => {
        if (taxsChild.document == element.name) {
          taxsChild.amount = line.amount * (taxsChild.checked ? element.value : 0);
        }
      });
      line.price = line.amount - (line.amount * (line.totalTaxs[0].checked ? this.defaultIgv : 0));
      line.ammountExtension = line.amount * line.quantity;
    });
    //console.log("calculando line for line " + JSON.stringify(line));
  }
  deleteInvoice(invoice: InvoiceModel) {
    console.log("Tratando de eliminar facturas.");
  }
}