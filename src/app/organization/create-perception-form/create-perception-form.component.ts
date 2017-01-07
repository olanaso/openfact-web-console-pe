/**
 * Created by lxpary on 14/12/16.
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

import {CreatePerceptionFormConfirmModalComponent} from './create-perception-form-confirm-modal.component'
import createNumberMask from "text-mask-addons/dist/createNumberMask.js";
import {type} from "os";


@Component({
  selector: 'of-create-perception-form',
  templateUrl: './create-perception-form.component.html',
  styleUrls: ['./create-perception-form.component.scss'],
  providers: [DatePipe]
})
export class CreatePerceptionFormComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;
  organization: Organization;
  invoice: Invoice;
  CURRENNCY: string = "PEN";

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

  tipoDocumentoEntidad = [
    {abreviatura: "DNI", denominacion: "DOC.NACIONAL DE IDENTIDAD", valor: "1"},
    {abreviatura: "RUC", denominacion: "REGISTRO UNICO DE CONTRIBUYENTE", valor: "6"},
    {abreviatura: "VARIOS", denominacion: "VARIOS-VENTAS MENORES A S/.700.00 Y OTROS", valor: "-"},
    {abreviatura: "C.EXTRANJERIA", denominacion: "CARNET DE EXTRANJERIA", valor: "4"},
    {abreviatura: "PASS.", denominacion: "PASAPORT", valor: "7"},
    {abreviatura: "CED.DIPLOMATICA", denominacion: "CEDULA DIPLOMATICA DE IDENTIDAD", valor: "A"},
    {abreviatura: "NO DOMICILIADO", denominacion: "NO DOMICILIADO, SIN RUC(EXPORTACION)", valor: "0"}
  ];

  monedaEntidad = [
    {denominacion: "Nuevos Soles", valor: "PEN"}, // el primero sera usado por defecto
    {denominacion: "Dolares Americanos", valor: "USD"}
  ];
  tasaEntidad = [
    {denominacion: "TASA 3%", valor: "3"}, // el primero sera usado por defecto
    {denominacion: "TASA 2%", valor: "2"}
  ];

  documentMask = [/[B|F|b|f]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  serieDocumentMask = ['P', /\d/, /\d/, /\d/];
  singleNumberMask = createNumberMask({
    allowDecimal: false
  });
  numberMask = {
    allowDecimal: true
  };
  quantityMask = {
    allowDecimal: true,
    decimalLimit: 3
  };
  perceptionCode = {
    prefix: "P ",
    allowDecimal: false
  };

  ngOnInit() {
  }


  buildForm(): void {
    this.form = this.formBuilder.group({

      entidadTipoDeDocumento: [null, Validators.compose([Validators.required])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(20),Validators.pattern('[0-9]{1,20}')])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      entidadDireccion: [null, Validators.compose([Validators.maxLength(150)])],
      entidadEmail: [null, Validators.compose([Validators.maxLength(150)])],

      serieDocumento: [null, Validators.compose([Validators.maxLength(4),Validators.pattern('[P]{1}[0-9]{3}')])],
      numeroDocumento: [null, Validators.compose([ Validators.maxLength(8),Validators.pattern('[0-9]{1,8}')])],
/*
      fechaDeEmision: [null, Validators.compose([Validators.required])],
*/
      monedaDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      tasaDocumento: [null, Validators.compose([Validators.required, Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      totalPago: [0, Validators.compose([Validators.required])],
      totalDocumentoSunat: [0, Validators.compose([Validators.required])],
      detalle: this.formBuilder.array([], Validators.compose([]))
    });
   // this.updateIssues();
    this.addFormGlobalObservers();
    this.setDefaultFormValues();
  }

  /*updateIssues() {
    this.form.patchValue({
      fechaDeEmision: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    });
  }*/

  setDefaultFormValues(): void {
    this.form.patchValue({
      entidadTipoDeDocumento: this.tipoDocumentoEntidad[0].valor,
      monedaDocumento: this.monedaEntidad[0].valor,
      tasaDocumento: this.tasaEntidad[0].valor
    });
  }

  get detalle(): FormArray {
    return this.form.get("detalle") as FormArray;
  }

  // Observers
  addFormGlobalObservers() {
    let formControls = [this.monedaDocumento, this.tasaDocumento];
    formControls.forEach(formControl => {
      formControl.valueChanges.subscribe(formControlValue => {
        this.refreshFormValues();
      });
    });
  }


  addDetalle(): void {
    let formGroup = this.formBuilder.group({
      tipoDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      numeroDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(13)])],
      fechaDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      monedaDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      totalDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      tipoCambio: [0, Validators.compose([Validators.required])],
      fechaCambio: [this.datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.compose([Validators.required])],
      pagoDocumentoSunat: [0, Validators.compose([Validators.required])],
      numeroPago: [null,Validators.compose([Validators.required])],
      fechaDocumentoSunat: [null, Validators.compose([Validators.required])],
      importeDocumentoSunat: [0, Validators.compose([Validators.required])],
      importePago: [0, Validators.compose([Validators.required])]
    });
    formGroup.patchValue({
      tipoDocumentoRelacionado: this.tipoDocumento[0].valor,
      monedaDocumentoRelacionado: this.monedaEntidad[0].valor
    });
    this.detalle.push(formGroup);
    this.refreshFormValues();
    this.addFormDetalleObservers(formGroup);
  }

  removeDetalle(index) {
    this.detalle.removeAt(index);
    this.refreshFormValues();
  }

  addFormDetalleObservers(formGroup: FormGroup) {
    let formControls = [this.getpagoDocumentoSunat(formGroup), this.getMonedaDocumentoRelacionado(formGroup), this.getTipoCambio(formGroup)];
    formControls.forEach(formControl => {
      formControl.valueChanges.subscribe(formControlValue => {
        this.refreshFormValues();
      });
    });
  }

  refreshFormValues(): void {
    // Igv valor numerico
    let tasaDocumento = this.tasaDocumento.valid ? this.tasaDocumento.value : undefined;
    if (!tasaDocumento) return;
    let monedaDocumento = this.monedaDocumento.valid ? this.monedaDocumento.value : undefined;
    if (!monedaDocumento) return;

    // Recorrido por cada detalle
    for (let i = 0; i < this.detalle.controls.length; i++) {
      let formGroup: FormGroup = this.detalle.controls[i] as FormGroup;
      let monedaDocumentoRelacionado = this.monedaEntidad.find(moneda => moneda.valor == this.getMonedaDocumentoRelacionado(formGroup).value);
      if (!monedaDocumentoRelacionado) continue;
      let tipoCambio = this.getTipoCambio(formGroup).valid ? this.getTipoCambio(formGroup).value : undefined;
      if (monedaDocumentoRelacionado.valor === monedaDocumento) {
        tipoCambio = 1;
      }
      let pagoDocumentoSunat = this.getpagoDocumentoSunat(formGroup).valid ? this.getpagoDocumentoSunat(formGroup).value : undefined;
      if (!pagoDocumentoSunat) continue;
      let importeDocumentoSunat = ( Math.round(tipoCambio * pagoDocumentoSunat * tasaDocumento) / 100 );
      let importePago = (Math.round(tipoCambio * pagoDocumentoSunat) - importeDocumentoSunat);
      formGroup.patchValue({
        importeDocumentoSunat: importeDocumentoSunat,
        importePago: importePago,
        fechaDocumentoSunat: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
      });
      this.CURRENNCY = monedaDocumento;
    }

    // Calculo de totales
    let totalDocumentoSunat = this.detalle.controls.map(formGroup => {
      return (this.getImporteRetencion(formGroup as FormGroup).value || 0)
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    let totalPago = this.detalle.controls.map(formGroup => {
      return (this.getImportePago(formGroup as FormGroup).value || 0)
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    this.form.patchValue({
      totalDocumentoSunat: totalDocumentoSunat,
      totalPago: totalPago
    });
  }

  save(form: any): void {
    if (!form.detalle || form.detalle.length == 0) {
      this.alertService.pop("warning", "Warning", "Warning! Is required to add at least one line.");
      return;
    }
    const modalRef = this.modalService.open(CreatePerceptionFormConfirmModalComponent)
    modalRef.componentInstance.totalDocumentoSunat = this.totalDocumentoSunat.value;
    modalRef.componentInstance.totalPago = this.totalPago.value;

    modalRef.result.then((redirect) => {
      this.working = true;
      this.dataService.perceptions().create(this.organization, form).subscribe(
        response => {
          this.working = false;
          this.alertService.pop("success", "Success", "Success! The perception has been created.");
          if (redirect) {
            this.router.navigate(["../"], { relativeTo: this.activatedRoute });
          } else {
            this.buildForm();
          }
        },
        error => {
          this.working = false;
          this.alertService.pop("error", "Error", "Perception could not be created.");
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
              totalDocumentoRelacionado: this.invoice["payableAmount"],
              fechaDocumentoRelacionado:this.datePipe.transform(this.invoice["issueDateTime"], 'yyyy-MM-dd'),
              tipoDocumentoRelacionado: this.invoice["invoiceTypeCode"],
              monedaDocumentoRelacionado: this.invoice["documentCurrencyCode"]
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

  get monedaDocumento(): FormControl {
    return this.form.get("monedaDocumento") as FormControl;
  }

  get tasaDocumento(): FormControl {
    return this.form.get("tasaDocumento") as FormControl;
  }

  getpagoDocumentoSunat(formGroup: FormGroup) {
    return formGroup.get("pagoDocumentoSunat");
  }

  getMonedaDocumentoRelacionado(formGroup: FormGroup) {
    return formGroup.get("monedaDocumentoRelacionado");
  }

  getTipoCambio(formGroup: FormGroup) {
    return formGroup.get("tipoCambio");
  }

  getImporteRetencion(formGroup: FormGroup) {
    return formGroup.get("importeDocumentoSunat");
  }

  getImportePago(formGroup: FormGroup) {
    return formGroup.get("importePago");
  }

  get totalDocumentoSunat(): FormControl {
    return this.form.get("totalDocumentoSunat") as FormControl;
  }

  get totalPago(): FormControl {
    return this.form.get("totalPago") as FormControl;
  }


}
