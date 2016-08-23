import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {OrganizationModel, InvoiceModel, LineModel, DataService} from '../../../services';
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


  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.route.parent.parent.snapshot.data['organization'];
  }

  ngOnInit() {
    //this.invoice.getList();

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      //console.log("Recuperando el ID: " + this.id);
      // In a real app: dispatch action to load the details here.
    });

    //console.log("Organization select :" + JSON.stringify(this.organization));
    this.loadInvoice();
    this.buildForm();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      invoiceType: ['', []],
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

  loadInvoice() {
    this.dataService.invoices().findById(this.organization, this.id).subscribe(
      result => {
        this.invoice = result;
        this.invoice.getLines().subscribe(
          result => 
          console.log("Json: " + JSON.stringify(result))
          //this.invoice.lines = <Array<LineModel>>(result || [])
        );
        console.log("Invoce encontrado :" + JSON.stringify(this.invoice.lines));
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
  // getLines() {
  //   this.dataService.invoices().getAll(this.organization,this.invoice, this.id).subscribe(
  //     result => {
  //       this.invoice = result;
  //       console.log("Invoce encontrado :" + JSON.stringify(this.invoice.lines));
  //       this.getLines();
  //     },
  //     error => {
  //       this.alerts.push({
  //         type: 'error',
  //         message: 'Error',
  //         details: 'Invoices could not be loaded.'
  //       });
  //     }
  //   );
  // }
}
