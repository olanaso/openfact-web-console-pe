/**
 * Created by lxpary on 14/12/16.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {DataService} from '../../core/data/data.service';
import {AlertService} from '../../core/alert/alert.service';
import {Organization} from '../../core/models/organization.model';

import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

import {CreateRetentionFormConfirmModalComponent} from './create-retention-form-confirm-modal.component'
import createNumberMask from "text-mask-addons/dist/createNumberMask.js";


@Component({
  selector: 'of-create-retention-form',
  templateUrl: './create-retention-form.component.html',
  styleUrls: ['./create-retention-form.component.scss']
})
export class CreateRetentionFormComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;
  organization: Organization;
  CURRENNCY: string = "PEN";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private modalService: NgbModal,
              private alertService: AlertService) {
    this.buildForm();
  }

  tipoDocumento = [
    {denominacion: "BOLETA ELECTRONICA", valor: "01"},
    {denominacion: "FACTURA ELECTRONICA", valor: "02"}
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
  retentionCode = {
    prefix: "P ",
    allowDecimal: false
  };

  ngOnInit() {
  }


  buildForm(): void {
    this.form = this.formBuilder.group({

      entidadTipoDeDocumento: [null, Validators.compose([Validators.required])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      entidadEmail: [null, Validators.compose([Validators.maxLength(150)])],

      serieDocumento: [null, Validators.compose([Validators.maxLength(4)])],
      numeroDocumento: [null, Validators.compose([Validators.maxLength(8)])],
      monedaDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      tasaDocumento: [null, Validators.compose([Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.maxLength(150)])],
      totalPago: [0, Validators.compose([Validators.required])],
      totalRetencion: [0, Validators.compose([Validators.required])],
      detalle: this.formBuilder.array([], Validators.compose([]))
    });
    this.addFormGlobalObservers();
    this.setDefaultFormValues();
  }

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
      serieDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(4)])],
      numeroDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(8)])],
      fechaDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      monedaDocumentoRelacionado: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      totalDocumentoRelacionado: [null, Validators.compose([Validators.required])],
      tipoCambio: [0, Validators.compose([Validators.required])],
      pagoSinRetencion: [0, Validators.compose([Validators.required])],
      numeroPago: [null],
      fechaRetencion: [null, Validators.compose([Validators.required])],
      importeRetencion: [0, Validators.compose([Validators.required])],
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
    let formControls = [this.getpagoSinRetencion(formGroup), this.getMonedaDocumentoRelacionado(formGroup), this.getTipoCambio(formGroup)];
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
      let pagoSinRetencion = this.getpagoSinRetencion(formGroup).valid ? this.getpagoSinRetencion(formGroup).value : undefined;
      if (!pagoSinRetencion) continue;
      let importeRetencion = ( Math.round(tipoCambio* pagoSinRetencion * tasaDocumento) / 100 );
      let importePago = (Math.round(tipoCambio * pagoSinRetencion) - importeRetencion);
      formGroup.patchValue({
        importeRetencion: importeRetencion,
        importePago: importePago
      });

      /*if (monedaDocumentoRelacionado.valor === monedaDocumento && !this.updateCurrency) {
       this.updateCurrency = true;
       formGroup.patchValue({
       tipoCambio: 1
       });
       } else {
       this.updateCurrency = false;
       }*/
      this.CURRENNCY = monedaDocumento;
    }

    // Calculo de totales
    let totalRetencion = this.detalle.controls.map(formGroup => {
      return (this.getImporteRetencion(formGroup as FormGroup).value || 0)
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    let totalPago = this.detalle.controls.map(formGroup => {
      return (this.getImportePago(formGroup as FormGroup).value || 0)
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    this.form.patchValue({
      totalRetencion: totalRetencion,
      totalPago: totalPago
    });
  }

  save(form: any): void {
    const modalRef = this.modalService.open(CreateRetentionFormConfirmModalComponent)
    modalRef.componentInstance.totalRetencion = this.totalRetencion.value;
    modalRef.componentInstance.totalPago = this.totalPago.value;

    modalRef.result.then((redirect) => {
      this.working = true;
      this.dataService.organizationPeru().create(this.organization, form).subscribe(
        response => {
          this.working = false;
          this.alertService.pop("success", "Success", "Success! The Retention has been created.");
          if (redirect) {
            this.router.navigate(["../"], { relativeTo: this.activatedRoute });
          } else {
            this.buildForm();
          }
        },
        error => {
          this.working = false;
          this.alertService.pop("error", "Error", "Retention could not be created.");
        }
      );
    }, (reason) => {
    });
  }

  cancel() {
    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }

  /**
   * Getter and Setter
   */

  get monedaDocumento(): FormControl {
    return this.form.get("monedaDocumento") as FormControl;
  }

  get tasaDocumento(): FormControl {
    return this.form.get("tasaDocumento") as FormControl;
  }

  getpagoSinRetencion(formGroup: FormGroup) {
    return formGroup.get("pagoSinRetencion");
  }

  getMonedaDocumentoRelacionado(formGroup: FormGroup) {
    return formGroup.get("monedaDocumentoRelacionado");
  }

  getTipoCambio(formGroup: FormGroup) {
    return formGroup.get("tipoCambio");
  }

  getImporteRetencion(formGroup: FormGroup) {
    return formGroup.get("importeRetencion");
  }

  getImportePago(formGroup: FormGroup) {
    return formGroup.get("importePago");
  }

  get totalRetencion(): FormControl {
    return this.form.get("totalRetencion") as FormControl;
  }

  get totalPago(): FormControl {
    return this.form.get("totalPago") as FormControl;
  }


}
