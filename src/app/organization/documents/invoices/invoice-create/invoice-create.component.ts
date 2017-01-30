import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { GenericType } from './../../../../core/model/genericType.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-invoice-create',
  templateUrl: './invoice-create.component.html',
  styles: [`
    .of-display-block {
      display: block;
    }
  `]
})
export class InvoiceCreateComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  dataSubscription: Subscription;

  form: FormGroup;
  working: boolean = false;

  organization: Organization;
  tiposComprobantePago: GenericType[];
  tiposDocumentEntidad: GenericType[];
  tiposDeAfectacionIgv: GenericType[];

  igv: GenericType;
  monedasSoportadas = ['PEN', 'USD'];

  numberMask = { allowDecimal: true, decimalLimit: 2 };
  quantityMask = { allowDecimal: true, decimalLimit: 3 };
  percentMask = { allowDecimal: true, decimalLimit: 2, prefix: '% ' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.buildForm();

    this.parentDataSubscription = this.route.data.subscribe((data) => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.tiposComprobantePago = data['tiposComprobantePago'] || [];
      this.tiposDocumentEntidad = data['tiposDocumentEntidad'] || [];
      this.tiposDeAfectacionIgv = data['tiposDeAfectacionIgv'] || [];
      this.igv = data['igv'] || { valor: 0.18 };
      this.loadData();
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      tipo: [null, Validators.compose([Validators.required])],
      igv: [null, Validators.compose([Validators.required])],

      entidadTipoDeDocumento: [null, Validators.compose([Validators.required])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(20)])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      entidadEmail: [null, Validators.compose([Validators.maxLength(150)])],

      moneda: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      operacionGratuita: [false, Validators.compose([Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      totalGravada: [null, Validators.compose([Validators.required])],
      totalExonerada: [null, Validators.compose([Validators.required])],
      totalInafecta: [null, Validators.compose([Validators.required])],
      totalGratuita: [null, Validators.compose([Validators.required])],
      totalIgv: [null, Validators.compose([Validators.required])],

      porcentajeDescuento: [null, Validators.compose([])],
      descuentoGlobal: [null, Validators.compose([Validators.required])],

      totalOtrosCargos: [null, Validators.compose([])],
      total: [null, Validators.compose([Validators.required])],

      detalle: this.formBuilder.array([], Validators.compose([]))
    });
    this.addTipoCambioFormControl();

    this.addTipoComprobanteObserver();
    this.addTipoDocumentoEntidadObserver();
    this.addDetalleObserver();
  }

  addTipoCambioFormControl() {
    this.form.get('moneda').valueChanges.subscribe(value => {
      if (value && value !== 'PEN') {
        this.form.addControl('tipoDeCambio', this.formBuilder.control(null, Validators.compose([Validators.required])));
      } else {
        this.form.removeControl('tipoDeCambio');
      }
    });
  }

  addDetalleFormControl(): void {
    let formGroup = this.formBuilder.group({
      unitCode: [null, Validators.compose([Validators.maxLength(150)])],
      descripcion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      cantidad: [null, Validators.compose([Validators.required])],
      tipoDeIgv: [null, Validators.compose([Validators.required])],
      igv: [this.igv.valor, Validators.compose([Validators.required])],
      valorUnitario: [null, Validators.compose([Validators.required])],
      precioUnitario: [null, Validators.compose([Validators.required])],
      subtotal: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])]
    });
    formGroup.get('tipoDeIgv').valueChanges.subscribe(value => {
      if (value) {
        const tipoIgvAfecta = this.tiposDeAfectacionIgv.find(f => f.codigo === value);
        if (tipoIgvAfecta) {
          formGroup.patchValue({
            igv: tipoIgvAfecta.afectaIgv ? this.igv.valor : 0
          });
        }
      }
    });

    if (this.tiposDeAfectacionIgv && this.tiposDeAfectacionIgv.length > 0) {
      formGroup.patchValue({
        tipoDeIgv: this.tiposDeAfectacionIgv[0].codigo
      });
    }

    this.detalle.push(formGroup);
  }

  removeDetalleFormControl(index) {
    this.detalle.removeAt(index);
  }

  addTipoComprobanteObserver() {
    this.form.get('tipo').valueChanges.subscribe(value => {
      if (value) {
        let tipoDocumento;
        const tipoComprobante = this.tiposComprobantePago.find(f => f.codigo === value);
        if (tipoComprobante && tipoComprobante.abreviatura.toUpperCase() === 'BOLETA') {
          tipoDocumento = this.tiposDocumentEntidad.find(f => f.abreviatura.toUpperCase() === 'DNI');
        } else if (tipoComprobante && tipoComprobante.abreviatura.toUpperCase() === 'FACTURA') {
          tipoDocumento = this.tiposDocumentEntidad.find(f => f.abreviatura.toUpperCase() === 'RUC');
        }

        if (tipoDocumento && tipoComprobante) {
          this.form.patchValue({
            entidadTipoDeDocumento: tipoDocumento.codigo
          });
        }
      }
    });
  }

  addTipoDocumentoEntidadObserver() {
    this.form.get('entidadTipoDeDocumento').valueChanges.subscribe(value => {
      if (value) {
        const tipoComprobante = this.tiposDocumentEntidad.find(f => f.codigo === value);
        if (tipoComprobante) {
          this.form.get('entidadNumeroDeDocumento').setValidators(Validators.compose([
            Validators.minLength(tipoComprobante.length),
            Validators.maxLength(tipoComprobante.length)
          ]));
        }
      }
    });
  }

  addDetalleObserver() {
    this.detalle.valueChanges.subscribe(value => {
      this.detalle.controls.filter(p => p.valid);
    });
  }

  loadData() {
    const formValue: any = {};
    if (this.tiposComprobantePago && this.tiposComprobantePago.length > 0) {
      formValue.tipo = this.tiposComprobantePago[0].codigo;
    }
    if (this.igv) {
      formValue.igv = this.igv.valor;
    }
    if (this.monedasSoportadas && this.monedasSoportadas.length > 0) {
      formValue.moneda = this.monedasSoportadas[0];
    }

    this.form.patchValue(formValue);
  }

  get detalle(): FormArray {
    return this.form.get('detalle') as FormArray;
  }

}
