import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { DataService } from "../../core/data/data.service";
import { AlertService } from "../../core/alert/alert.service";
import { Organization } from "../../core/models/organization.model";

import { CreateInvoiceFormConfirmModalComponent } from "./create-invoice-form-confirm-modal.component";

const gravado = "GRAVADO";
const exonerado = "EXONERADO";
const inafecto = "INAFECTO";
const igv = 0.18;

@Component({
  selector: "of-create-invoice-form",
  templateUrl: "./create-invoice-form.component.html",
  styleUrls: ["./create-invoice-form.component.scss"]
})
export class CreateInvoiceFormComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;

  organization: Organization;


  tipoDocumento = [
    { denominacion: "BOLETA", valor: "01" },
    { denominacion: "FACTURA", valor: "02" }
  ];

  tipoDocumentoEntidad = [
    { abreviatura: "DNI", denominacion: "DOC.NACIONAL DE IDENTIDAD", valor: "1" },
    { abreviatura: "RUC", denominacion: "REGISTRO UNICO DE CONTRIBUYENTE", valor: "6" },
    { abreviatura: "VARIOS", denominacion: "VARIOS-VENTAS MENORES A S/.700.00 Y OTROS", valor: "-" },
    { abreviatura: "C.EXTRANJERIA", denominacion: "CARNET DE EXTRANJERIA", valor: "4" },
    { abreviatura: "PASS.", denominacion: "PASAPORT", valor: "7" },
    { abreviatura: "CED.DIPLOMATICA", denominacion: "CEDULA DIPLOMATICA DE IDENTIDAD", valor: "A" },
    { abreviatura: "NO DOMICILIADO", denominacion: "NO DOMICILIADO, SIN RUC(EXPORTACION)", valor: "0" }
  ];

  tipoDeIgv = [
    { denominacion: "Gravado - Operación Onerosa", afectaIgv: true, grupo: gravado, valor: "1" },
    { denominacion: "Gravado - Retiro por premio", afectaIgv: true, grupo: gravado, valor: "2" },
    { denominacion: "Gravado - Retiro por donación", afectaIgv: true, grupo: gravado, valor: "3" },
    { denominacion: "Gravado - Retiro", afectaIgv: true, grupo: gravado, valor: "4" },
    { denominacion: "Gravado - Retiro por publicidad", afectaIgv: true, grupo: gravado, valor: "5" },
    { denominacion: "Gravado - Bonificaciones", afectaIgv: true, grupo: gravado, valor: "6" },
    { denominacion: "Gravado – Retiro por entrega a trabajadores", afectaIgv: true, grupo: gravado, valor: "7" },
    { denominacion: "Exonerado - Operación Onerosa", afectaIgv: false, grupo: exonerado, valor: "8" },
    { denominacion: "Inafecto - Operación Onerosa", afectaIgv: false, grupo: inafecto, valor: "9" },
    { denominacion: "Inafecto - Retiro por Bonificación", afectaIgv: false, grupo: inafecto, valor: "10" },
    { denominacion: "Inafecto - Retiro", afectaIgv: false, grupo: inafecto, valor: "11" },
    { denominacion: "Inafecto - Retiro por Muestras Médicas", afectaIgv: false, grupo: inafecto, valor: "12" },
    { denominacion: "Inafecto - Retiro por Convenio Colectivo", afectaIgv: false, grupo: inafecto, valor: "13" },
    { denominacion: "Inafecto - Retiro por premio", afectaIgv: false, grupo: inafecto, valor: "14" },
    { denominacion: "Inafecto - Retiro por publicidad", afectaIgv: false, grupo: inafecto, valor: "15" },
    { denominacion: "Exportacion", afectaIgv: false, grupo: inafecto, valor: "16" }
  ];

  monedas = [
    { denominacion: "Nuevos Soles", valor: "PEN" }, // el primero sera usado por defecto
    { denominacion: "Dolares Americanos", valor: "USD" }
  ];

  numberMask = {
    allowDecimal: true
  };
  quantityMask = {
    allowDecimal: true,
    decimalLimit: 3
  };
  percentMask = {
    prefix: "% ",
    allowDecimal: true
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      tipo: [null, Validators.compose([Validators.required])],
      igv: [null, Validators.compose([Validators.required])],

      entidadTipoDeDocumento: [null, Validators.compose([Validators.required])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      entidadEmail: [null, Validators.compose([Validators.maxLength(150)])],

      moneda: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      operacionGratuita: [false, Validators.compose([Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      totalGravado: [null, Validators.compose([Validators.required])],
      totalExonerado: [null, Validators.compose([Validators.required])],
      totalInafecto: [null, Validators.compose([Validators.required])],
      totalGratuito: [null, Validators.compose([Validators.required])],
      totalIgv: [null, Validators.compose([Validators.required])],

      porcentajeDeDescuento: [null, Validators.compose([])],
      descuentoGlobal: [null, Validators.compose([Validators.required])],

      totalOtrosCargos: [null, Validators.compose([])],
      total: [null, Validators.compose([Validators.required])],

      detalle: this.formBuilder.array([], Validators.compose([]))
    });

    this.addFormGlobalObservers();
    this.setDefaultFormValues();
  }

  // Carga valores por defecto del formulario principal
  setDefaultFormValues(): void {
    this.form.patchValue({
      tipo: this.tipoDocumento[0].valor,
      igv: igv * 100,
      entidadTipoDeDocumento: this.tipoDocumentoEntidad[0].valor,
      moneda: this.monedas[0].valor
    });
  }

  // Se activa al agregar un nuevo item al detalle del documento
  addDetalle(): void {
    let formGroup = this.formBuilder.group({
      unitCode: [null, Validators.compose([Validators.maxLength(150)])],
      descripcion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      cantidad: [null, Validators.compose([Validators.required])],
      tipoDeIgv: [null, Validators.compose([Validators.required])],
      valorUnitario: [null, Validators.compose([Validators.required])],
      subtotal: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])]
    });

    formGroup.patchValue({
      tipoDeIgv: this.tipoDeIgv[0].valor
    });

    this.detalle.push(formGroup);
    this.refreshFormValues();
    this.addFormDetalleObservers(formGroup);
  }

  // Se activa al eliminar un detalle
  removeDetalle(index) {
    this.detalle.removeAt(index);
    this.refreshFormValues();
  }

  // Observers
  addFormGlobalObservers() {
    let formControls = [this.igv, this.operacionGratuita, this.porcentajeDeDescuento, this.totalOtrosCargos];
    formControls.forEach(formControl => {
      formControl.valueChanges.subscribe(formControlValue => {
        this.refreshFormValues();
      });
    });

    this.moneda.valueChanges.subscribe(value => this.changeMoneda(value));
  }

  // Se activa al cambiar de moneda
  changeMoneda(value) {
    if (value == this.monedas[0].valor) {
      this.form.removeControl("tipoCambio");
    } else {
      this.form.addControl("tipoCambio", this.formBuilder.control(null, Validators.compose([Validators.required])));
    }
  }

  addFormDetalleObservers(formGroup: FormGroup) {
    let formControls = [this.getDetalleCantidad(formGroup), this.getDetalleValorUnitario(formGroup), this.getDetalleTipoDeIgv(formGroup)];
    formControls.forEach(formControl => {
      formControl.valueChanges.subscribe(formControlValue => {
        this.refreshFormValues();
      });
    });
  }

  // Actualizar calculos
  refreshFormValues(): void {
    if (!this.igv.valid) {
      return;
    }

    // Igv valor numerico
    let igvValue = this.igv.value;

    // Recorrido por cada detalle
    for (let i = 0; i < this.detalle.controls.length; i++) {
      let formGroup: FormGroup = this.detalle.controls[i] as FormGroup;

      if (!this.getDetalleTipoDeIgv(formGroup).valid || !this.getDetalleCantidad(formGroup).valid || !this.getDetalleValorUnitario(formGroup).valid) {
        continue;
      }

      let tipoDeIgv = this.tipoDeIgv.find(tipoDeIgv => tipoDeIgv.valor == this.getDetalleTipoDeIgv(formGroup).value);
      let cantidad = this.getDetalleCantidad(formGroup).value;
      let valorUnitario = this.getDetalleValorUnitario(formGroup).value;

      let subtotal = Math.round(cantidad * valorUnitario * 100) / 100;
      let total = !tipoDeIgv.afectaIgv ? Math.round(cantidad * valorUnitario * 100) / 100 : Math.round(cantidad * valorUnitario * (igvValue + 100)) / 100;

      formGroup.patchValue({
        subtotal: subtotal,
        total: total
      });
    }

    // Calculo de totales
    let porcentajeDeDescuento;

    let totalGratuito;
    let totalExonerado;
    let totalGravado;
    let totalInafecto;
    let totalIgv;

    let operacionGratuita = this.operacionGratuita.value;
    if (operacionGratuita) {
      totalGratuito = this.detalle.controls
        .map(formGroup => this.getDetalleTotal(formGroup as FormGroup).value || 0)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

      porcentajeDeDescuento = 0;
      totalExonerado = 0;
      totalGravado = 0;
      totalInafecto = 0;
      totalIgv = 0;
    } else {
      totalGratuito = 0;

      porcentajeDeDescuento = this.porcentajeDeDescuento.value || 0;

      totalExonerado = this.detalle.controls.filter(formGroup => {
        let tipoDeIgv = this.tipoDeIgv.find(tipoDeIgv => tipoDeIgv.valor == this.getDetalleTipoDeIgv(formGroup as FormGroup).value);
        return tipoDeIgv.grupo == exonerado;
      }).map(formGroup => this.getDetalleSubtotal(formGroup as FormGroup).value || 0)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

      totalGravado = this.detalle.controls.filter(formGroup => {
        let tipoDeIgv = this.tipoDeIgv.find(tipoDeIgv => tipoDeIgv.valor == this.getDetalleTipoDeIgv(formGroup as FormGroup).value);
        return tipoDeIgv.grupo == gravado;
      }).map(formGroup => this.getDetalleSubtotal(formGroup as FormGroup).value || 0)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

      totalInafecto = this.detalle.controls.filter(formGroup => {
        let tipoDeIgv = this.tipoDeIgv.find(tipoDeIgv => tipoDeIgv.valor == this.getDetalleTipoDeIgv(formGroup as FormGroup).value);
        return tipoDeIgv.grupo == inafecto;
      }).map(formGroup => this.getDetalleSubtotal(formGroup as FormGroup).value || 0)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

      totalIgv = this.detalle.controls.map(formGroup => {
        return (this.getDetalleTotal(formGroup as FormGroup).value || 0) - (this.getDetalleSubtotal(formGroup as FormGroup).value || 0);
      }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    let totalGravadoConDescuento = Math.round(totalGravado * (100 - porcentajeDeDescuento)) / 100;
    let totalExoneradoConDescuento = Math.round(totalExonerado * (100 - porcentajeDeDescuento)) / 100;
    let totalInafectoConDescuento = Math.round(totalInafecto * (100 - porcentajeDeDescuento)) / 100;
    let totalIgvConDescuento = Math.round(totalIgv * (100 - porcentajeDeDescuento)) / 100;

    // Descuento global
    let descuentoGlobal = (totalGravado - totalGravadoConDescuento) + (totalExonerado - totalExoneradoConDescuento) + (totalInafecto - totalInafectoConDescuento);

    // Calculo del total
    let totalOtrosCargos = this.totalOtrosCargos.valid ? this.totalOtrosCargos.value : 0;
    let total = totalGravadoConDescuento + totalExoneradoConDescuento + totalInafectoConDescuento + totalIgvConDescuento + totalOtrosCargos;

    this.form.patchValue({
      totalGratuito: totalGratuito,
      totalGravado: totalGravadoConDescuento,
      totalExonerado: totalExoneradoConDescuento,
      totalInafecto: totalInafectoConDescuento,
      totalIgv: totalIgvConDescuento,
      descuentoGlobal: descuentoGlobal,
      total: total
    });
  }


  save(form: any): void {
    const modalRef = this.modalService.open(CreateInvoiceFormConfirmModalComponent)

    modalRef.componentInstance.totalExonerado = this.totalExonerado.value;
    modalRef.componentInstance.totalInafecto = this.totalInafecto.value;
    modalRef.componentInstance.totalGravado = this.totalGravado.value;
    modalRef.componentInstance.totalIgv = this.totalIgv.value;
    modalRef.componentInstance.totalGratuito = this.totalGratuito.value;
    modalRef.componentInstance.descuentoGlobal = this.descuentoGlobal.value;
    modalRef.componentInstance.totalOtrosCargos = this.totalOtrosCargos.value;
    modalRef.componentInstance.total = this.total.value;

    modalRef.result.then((redirect) => {
      this.working = true;
      this.dataService.organizationPeru().create(this.organization, form).subscribe(
        response => {
          this.working = false;
          this.alertService.pop("success", "Success", "Success! The invoice has been created.");
          /*if (redirect) {
            this.router.navigate(["../"], { relativeTo: this.activatedRoute });
          } else {
            this.buildForm();
          }*/
        },
        error => {
          this.working = false;
          this.alertService.pop("error", "Error", "Invoice could not be created.");
        }
      );
    }, (reason) => {
    });
  }

  cancel() {
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }

  /**
   * Getter and Setter
  */
  get moneda(): FormControl {
    return this.form.get("moneda") as FormControl;
  }

  get igv(): FormControl {
    return this.form.get("igv") as FormControl;
  }

  get operacionGratuita(): FormControl {
    return this.form.get("operacionGratuita") as FormControl;
  }

  get porcentajeDeDescuento(): FormControl {
    return this.form.get("porcentajeDeDescuento") as FormControl;
  }

  get detalle(): FormArray {
    return this.form.get("detalle") as FormArray;
  }

  get totalExonerado(): FormArray {
    return this.form.get("totalExonerado") as FormArray;
  }

  get totalInafecto(): FormArray {
    return this.form.get("totalInafecto") as FormArray;
  }

  get totalGravado(): FormArray {
    return this.form.get("totalGravado") as FormArray;
  }

  get totalIgv(): FormArray {
    return this.form.get("totalIgv") as FormArray;
  }

  get totalGratuito(): FormArray {
    return this.form.get("totalGratuito") as FormArray;
  }

  get descuentoGlobal(): FormArray {
    return this.form.get("descuentoGlobal") as FormArray;
  }

  get totalOtrosCargos(): FormArray {
    return this.form.get("totalOtrosCargos") as FormArray;
  }

  get total(): FormArray {
    return this.form.get("total") as FormArray;
  }

  getDetalleCantidad(formGroup: FormGroup) {
    return formGroup.get("cantidad");
  }

  getDetalleValorUnitario(formGroup: FormGroup) {
    return formGroup.get("valorUnitario");
  }

  getDetalleTipoDeIgv(formGroup: FormGroup) {
    return formGroup.get("tipoDeIgv");
  }

  getDetalleSubtotal(formGroup: FormGroup) {
    return formGroup.get("subtotal");
  }

  getDetalleTotal(formGroup: FormGroup) {
    return formGroup.get("total");
  }

}
