/**
 * Created by lxpary on 03/01/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Response, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Observable";
import {DataService} from '../../core/data/data.service';
import {AlertService} from '../../core/alert/alert.service';
import {Organization} from '../../core/models/organization.model';
import { Invoice } from "../../core/models/invoice.model";
import {DatePipe} from '@angular/common';

import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

import {CreateVoidedFormConfirmModalComponent} from './create-voided-form-confirm-modal.component'
import createNumberMask from "text-mask-addons/dist/createNumberMask.js";
import {type} from "os";

@Component({
  selector: 'of-create-voided-form',
  templateUrl: './create-voided-form.component.html',
  styleUrls: ['./create-voided-form.component.scss'],
  providers: [DatePipe]
})
export class CreateVoidedFormComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;
  organization: Organization;
  invoice: Invoice;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private modalService: NgbModal,
              private alertService: AlertService,
              private datePipe: DatePipe) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.buildForm();
  }

  tipoDocumento = [
    {denominacion: "FACTURA ELECTRONICA", valor: "01"},
    {denominacion: "BOLETA ELECTRONICA", valor: "03"}
  ];

  documentMask = [/[B|F|b|f]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  ngOnInit() {
  }


  buildForm(): void {
    this.form = this.formBuilder.group({
      serieDocumento: [null, Validators.compose([Validators.maxLength(11)])],
      numeroDocumento: [null, Validators.compose([ Validators.maxLength(5),Validators.pattern('[0-9]{1,5}')])],
/*
      fechaDeEmision: [null, Validators.compose([Validators.required])],
*/
      observaciones: [null, Validators.compose([ Validators.maxLength(150)])],
      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],
      detalle: this.formBuilder.array([], Validators.compose([]))
    });
    this.form.patchValue({
      serieDocumento:"RA-"+this.datePipe.transform(new Date(), 'yyyyMMdd'),
/*
      fechaDeEmision: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
*/
    });
  }

  addDetalle(): void {
    let formGroup = this.formBuilder.group({
      id: [0, Validators.compose([Validators.required])],
      tipoDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      numeroDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(13)])],
      descripcionDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(150)])]
    });
    formGroup.patchValue({
      tipoDocumentoRelacionado: this.tipoDocumento[0].valor
    });
    this.detalle.push(formGroup);
    this.refreshFormValues();
  }

  removeDetalle(index) {
    this.detalle.removeAt(index);
    this.refreshFormValues();
  }



  refreshFormValues(): void {
    // Recorrido por cada detalle
    for (let i = 0; i < this.detalle.controls.length; i++) {
      let formGroup: FormGroup = this.detalle.controls[i] as FormGroup;
      formGroup.patchValue({
        id: i+1
      });
    }

  }

  save(form: any): void {
    if (!form.detalle || form.detalle.length == 0) {
      this.alertService.pop("warning", "Warning", "Warning! Is required to add at least one line.");
      return;
    }
    const modalRef = this.modalService.open(CreateVoidedFormConfirmModalComponent)

    modalRef.result.then((result) => {
      this.working = true;
      this.form.patchValue({
        observaciones: result.description
      });
      this.dataService.voideds().create(this.organization, form).subscribe(
        response => {
          this.working = false;
          this.alertService.pop("success", "Success", "Success! The voided has been created.");
          if (result.status) {
            this.router.navigate(["../"], { relativeTo: this.activatedRoute });
          } else {
            this.buildForm();
          }
        },
        error => {
          this.working = false;
          this.alertService.pop("error", "Error", "Voided could not be created.");
        }
      );
    }, (reason) => {
    });
  }

  findInvoice(index) {
    let formGroup: FormGroup = this.detalle.controls[index] as FormGroup;
    if (this.getNumeroDocumentoRelacionado(formGroup).valid) {
      let queryParam: URLSearchParams = new URLSearchParams();
      queryParam.set("documentId", this.getNumeroDocumentoRelacionado(formGroup).value);
      this.dataService.invoices().getAll(this.organization, queryParam).subscribe(
        response => {
          this.invoice = response[0];
          if (this.invoice) {
            formGroup.patchValue({
              tipoDocumentoRelacionado: this.invoice["invoiceTypeCode"]
            });
          } else {
            this.alertService.pop("info", "Info", "Could not find Invoice.");
          }
        },
        error => {
          this.alertService.pop("error", "Error", "Could not find Invoice.");
        }
      );
    }
  }

  cancel() {
    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }

  /**
   * Getter and Setter
   */
  getNumeroDocumentoRelacionado(formGroup: FormGroup) {
    return formGroup.get("numeroDocumentoRelacionado");
  }
  get detalle(): FormArray {
    return this.form.get("detalle") as FormArray;
  }

}
