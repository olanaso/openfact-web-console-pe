import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { DialogService } from './../../../../core/dialog/dialog.service';
import { Document } from './../../../../core/model/document.model';
import { GenericType } from './../../../../core/model/genericType.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-voided-document-create',
  templateUrl: './voided-document-create.component.html',
  styles: [`
    .of-display-block {
      display: block;
    }
    input[readonly] {
      background-color: #d1d1d1 !important;
      color: #363636 !important;
    }
  `]
})
export class VoidedDocumentCreateComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  paramsSubscription: Subscription;

  form: FormGroup;
  working: boolean = false;

  organization: Organization;

  documentMask = [/[B|F|b|f]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  numberMask = { allowDecimal: true, decimalLimit: 2 };

  constructor(private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder, private modalService: NgbModal,
    private dataService: DataService, private alertService: AlertService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.buildForm();
    this.parentDataSubscription = this.route.parent.data.subscribe((data) => {
      this.organization = data['organization'];
    });
    this.paramsSubscription = this.route.params.subscribe(params => {
      let invoiceDocumentId = params['invoice'];
      if (invoiceDocumentId) {
        const formGroup = this.addDetalleFormControl();
        this.findInvoiceByDocumentId(formGroup, invoiceDocumentId);
      }
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      serieDocumento: [null, Validators.compose([Validators.maxLength(11)])],
      numeroDocumento: [null, Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]{1,5}')])],

      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      detalle: this.formBuilder.array([], Validators.compose([]))
    });
  }

  addDetalleFormControl(): FormGroup {
    const formGroup = this.formBuilder.group({
      tipoDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      numeroDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(13)])],
      descripcionDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],

      montoDocumentoRelacionado: [null],
      monedaDocumentoRelacionado: [null],
      entidadDenominacionDocumentoRelacionado: [null]
    });
    this.detalle.push(formGroup);

    return formGroup;
  }

  removeDetalleFormControl(index) {
    this.detalle.removeAt(index);
  }

  get detalle(): FormArray {
    return this.form.get('detalle') as FormArray;
  }

  save(form: FormGroup): void {
    if (!form.value.detalle || form.value.detalle.length == 0) {
      this.alertService.pop('warning', 'Warning', 'Warning! Is required to add at least one line.');
      return;
    }

    this.dialogService.confirm('Confirm', 'Estas seguro de realizar esta operacion').result.then(
      (redirect) => {
        this.working = true;

        form.value.detalle.forEach(detalle => {
          detalle.montoDocumentoRelacionado = undefined;
          detalle.monedaDocumentoRelacionado = undefined;
          detalle.entidadDenominacionDocumentoRelacionado = undefined;
        });

        this.dataService.organizationsSunat().createVoidedDocument(this.organization.organization, form.value).subscribe(
          response => {
            this.working = false;
            this.alertService.pop('success', 'Success', 'Success! The voided document has been created.');
            if (redirect) {
              this.router.navigate(['../'], { relativeTo: this.route });
            } else {
              this.buildForm();
            }
          },
          error => {
            this.working = false;
          }
        );
      },
      (dissmiss) => { }
    );
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  findInvoiceByDocumentId(formGroup: FormGroup, documentId?: string) {
    if (!formGroup) {
      return;
    }
    if (!documentId) {
      documentId = formGroup.get('numeroDocumentoRelacionado').value;
    }
    if (!documentId) {
      return;
    }

    let queryParam: URLSearchParams = new URLSearchParams();
    queryParam.set('documentType', 'INVOICE');
    queryParam.set('documentId', documentId);
    this.dataService.documents().getAll(this.organization, queryParam).subscribe(data => {
      if (data && data.length > 0) {
        formGroup.patchValue({
          numeroDocumentoRelacionado: data[0]['documentId'],
          tipoDocumentoRelacionado: data[0]['attributes']['invoiceTypeCode'][0],
          montoDocumentoRelacionado: data[0]['attributes']['legalMonetaryTotalPayableAmount'][0],
          monedaDocumentoRelacionado: data[0]['attributes']['documentCurrencyCode'][0],
          entidadDenominacionDocumentoRelacionado: data[0]['customerRegistrationName']
        });
      } else {
        this.alertService.pop('info', 'Info', 'Could not find Invoice.');
      }
    });
  }

}
