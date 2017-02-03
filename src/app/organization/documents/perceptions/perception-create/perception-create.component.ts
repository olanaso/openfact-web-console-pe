import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { DialogService } from './../../../../core/dialog/dialog.service';
import { GenericType } from './../../../../core/model/genericType.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'of-perception-create',
  templateUrl: './perception-create.component.html',
  styles: [`
    .of-display-block {
      display: block;
    }
    .of-no-bottom-margin {
      margin-bottom: 0px;
    }
    .of-float-right {
      float: right;
    }
  `]
})
export class PerceptionCreateComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  dataSubscription: Subscription;

  form: FormGroup;
  working: boolean = false;

  organization: Organization;
  tiposRegimenPercepcion: GenericType[];
  documentosRelacionadosPercepcion: GenericType[];
  tiposDocumentEntidad: GenericType[];
  monedasSoportadas: GenericType[];

  documentMask = [/[B|F|b|f]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  integerMask = { allowDecimal: false };
  numberMask = { allowDecimal: true, decimalLimit: 2 };
  quantityMask = { allowDecimal: true, decimalLimit: 3 };
  percentMask = { allowDecimal: true, decimalLimit: 2, prefix: '% ' };
  numberPEMask = { allowDecimal: true, decimalLimit: 2, prefix: 'PEN ' };

  constructor(private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder, private modalService: NgbModal,
    private dataService: DataService, private alertService: AlertService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.buildForm();
    this.parentDataSubscription = this.route.parent.data.subscribe((data) => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.tiposRegimenPercepcion = data['tiposRegimenPercepcion'] || [];
      this.documentosRelacionadosPercepcion = data['documentosRelacionadosPercepcion'] || [];
      this.tiposDocumentEntidad = data['tiposDocumentEntidad'] || [];
      this.monedasSoportadas = data['monedas'];
      this.loadDataForm();
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      entidadTipoDeDocumento: [null, Validators.compose([Validators.required])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{1,20}')])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      entidadDireccion: [null, Validators.compose([Validators.maxLength(150)])],
      entidadEmail: [null, Validators.compose([Validators.maxLength(150)])],

      serieDocumento: [null, Validators.compose([Validators.maxLength(4), Validators.pattern('[P]{1}[0-9]{3}')])],
      numeroDocumento: [null, Validators.compose([Validators.maxLength(8), Validators.pattern('[0-9]{1,8}')])],
      monedaDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      codigoDocumento: [null, Validators.compose([Validators.required, Validators.required])],
      tasaDocumento: [null, Validators.compose([Validators.required, Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      totalPago: [0, Validators.compose([Validators.required])],
      totalDocumentoSunat: [0, Validators.compose([Validators.required])],
      detalle: this.formBuilder.array([], Validators.compose([]))
    });

    // Observer para cambiar longitud del tipo de documento
    this.form.get('codigoDocumento').valueChanges.subscribe(value => {
      if (value) {
        const tipoRegimen = this.tiposRegimenPercepcion.find(f => f.codigo === value);
        if (tipoRegimen) {
          this.form.patchValue({
            tasaDocumento: tipoRegimen.valor
          });
        }
      }
    });

    // Observer para cambiar longitud del tipo de documento
    this.form.get('entidadTipoDeDocumento').valueChanges.subscribe(value => {
      if (value) {
        const tipoComprobante = this.tiposDocumentEntidad.find(f => f.codigo === value);
        if (tipoComprobante) {
          this.form.get('entidadNumeroDeDocumento').setValidators(Validators.compose([
            Validators.required,
            Validators.minLength(tipoComprobante.length),
            Validators.maxLength(tipoComprobante.length)
          ]));
        }
      }
    });

  }

  addDetalleFormControl(): void {
    const formGroup = this.formBuilder.group({
      tipoDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      numeroDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(13)])],
      fechaDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      monedaDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      totalDocumentoRelacionado: [null, Validators.compose([Validators.required])],

      tipoCambio: [null, Validators.compose([Validators.required])],
      fechaCambio: [null, Validators.compose([Validators.required])],

      pagoDocumentoSunat: [null, Validators.compose([Validators.required])],
      numeroPago: [null, Validators.compose([Validators.required])],

      fechaDocumentoSunat: [null, Validators.compose([Validators.required])],
      importeDocumentoSunat: [null, Validators.compose([Validators.required])],
      importePago: [null, Validators.compose([Validators.required])]
    });
    this.loadDataDetalle(formGroup);
    this.detalle.push(formGroup);
  }

  removeDetalleFormControl(index: number) {
    this.detalle.removeAt(index);
  }

  loadDataForm() {
    const formValue: any = {};
    if (this.tiposRegimenPercepcion && this.tiposRegimenPercepcion.length > 0) {
      formValue.codigoDocumento = this.tiposRegimenPercepcion[0].codigo;
    }
    if (this.monedasSoportadas && this.monedasSoportadas.length > 0) {
      formValue.monedaDocumento = this.monedasSoportadas[0].codigo;
    }
    if (this.tiposDocumentEntidad && this.tiposDocumentEntidad.length > 0) {
      let tipoDocumentoEntidad = this.tiposDocumentEntidad.find(f => f.abreviatura === 'RUC');
      if (!tipoDocumentoEntidad) {
        tipoDocumentoEntidad = this.tiposDocumentEntidad[0];
      }
      formValue.entidadTipoDeDocumento = tipoDocumentoEntidad.codigo;
    }

    this.form.patchValue(formValue);
  }

  loadDataDetalle(formGroup: FormGroup) {
    if (this.documentosRelacionadosPercepcion && this.documentosRelacionadosPercepcion.length > 0) {
      formGroup.patchValue({
        tipoDocumentoRelacionado: this.documentosRelacionadosPercepcion[0].codigo
      });
    }
  }

  findDocument(formGroup: FormGroup) {
    if (formGroup.get('numeroDocumentoRelacionado').valid && formGroup.get('tipoDocumentoRelacionado').valid) {
      const codigoTipoDocumentoRelacionado = formGroup.get('tipoDocumentoRelacionado').value;
      const tipoDocumentoRelacionado = this.documentosRelacionadosPercepcion.find(f => f.codigo === codigoTipoDocumentoRelacionado);

      let queryParam: URLSearchParams = new URLSearchParams();
      queryParam.set('documentType', tipoDocumentoRelacionado.grupo);
      queryParam.set('documentId', formGroup.get('numeroDocumentoRelacionado').value);

      this.dataService.documents().getAll(this.organization, queryParam).subscribe(
        data => {
          if (data) {
            formGroup.patchValue({
              totalDocumentoRelacionado: data[0]['attributes']['legalMonetaryTotalPayableAmount'][0],
              fechaDocumentoRelacionado: data[0]['attributes']['issueDate'][0],
              tipoDocumentoRelacionado: data[0]['attributes']['invoiceTypeCode'][0],
              monedaDocumentoRelacionado: data[0]['attributes']['documentCurrencyCode'][0],
            });
          } else {
            this.alertService.pop('info', 'Info', 'Could not find Document.');
          }
        }
      );
    }
  }

  get detalle(): FormArray {
    return this.form.get('detalle') as FormArray;
  }

}
