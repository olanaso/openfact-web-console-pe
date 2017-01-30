import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder, private modalService: NgbModal,
    private dataService: DataService, private alertService: AlertService) { }

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
      this.loadDataForm();
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

    // Moneda extrangera
    this.form.get('moneda').valueChanges.subscribe(value => {
      if (value && value !== 'PEN') {
        this.form.addControl('tipoDeCambio', this.formBuilder.control(null, Validators.compose([Validators.required])));
      } else {
        this.form.removeControl('tipoDeCambio');
      }
    });

    // Observer al cambiar tipo de comprobante de pago Boleta/Factura
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

    // Observer para cambiar longitud del tipo de documento
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

    // Recalculos
    this.form.get('igv').valueChanges.subscribe(value => {
      //this.recalcularDatos();
    });
    this.form.get('porcentajeDescuento').valueChanges.subscribe(value => {
      // this.recalcularDatos();
    });
    this.form.get('totalOtrosCargos').valueChanges.subscribe(value => {
      //this.recalcularDatos();
    });
    this.detalle.valueChanges.subscribe(value => {
      // this.recalcularDatos();
    });
  }

  addDetalleFormControl(): void {
    let formGroup = this.formBuilder.group({
      unitCode: [null, Validators.compose([Validators.maxLength(150)])],
      descripcion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      cantidad: [null, Validators.compose([Validators.required])],
      tipoDeIgv: [null, Validators.compose([Validators.required])],
      valorUnitario: [null, Validators.compose([Validators.required])],
      precioUnitario: [null, Validators.compose([Validators.required])],
      subtotal: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])]
    });
    this.detalle.push(formGroup);
    this.loadDataDetalle(formGroup);
  }

  removeDetalleFormControl(index) {
    this.detalle.removeAt(index);
  }

  getIgvFactor(formControl: FormControl): number {
    const tipoAfectacionIgv = this.tiposDeAfectacionIgv.find(p => p.codigo == formControl.get('tipoDeIgv').value);
    if(tipoAfectacionIgv && tipoAfectacionIgv.afectaIgv) {
      return this.form.get('igv').value || 0;
    }
    return 0;    
  }

  recalcularDatos() {
    let totalGratuita = 0;
    let totalGravado = 0, totalExonerado = 0, totalInafecto = 0;
    let totalIgv = 0;

    const operacionGratuita = this.form.get('operacionGratuita').value;
    const porcentajeDescuento = (this.form.get('porcentajeDescuento').value || 0) / 100;
    const totalOtrosCargos = this.form.get('totalOtrosCargos').value || 0;

    this.detalle.controls.forEach(formControl => {
      const subtotal = formControl.get('subtotal').value || 0;
      const total = formControl.get('total').value || 0;

      //Operacion gratuita
      if (operacionGratuita) {
        totalGratuita += subtotal;
      } else {
        const tipoIgv = this.tiposDeAfectacionIgv.find(p => p.codigo === formControl.get('tipoDeIgv').value);
        if (tipoIgv.grupo.toUpperCase() == 'GRAVADO') {
          totalGravado += subtotal;
        } else if (tipoIgv.grupo.toUpperCase() == 'EXONERADO') {
          totalExonerado += subtotal;
        } else if (tipoIgv.grupo.toUpperCase() == 'INAFECTO') {
          totalInafecto += subtotal;
        }
      }
      totalIgv += (total - subtotal);
    });
    totalGravado = this.round(totalGravado, 2);
    totalExonerado = this.round(totalExonerado, 2);
    totalInafecto = this.round(totalInafecto, 2);
    totalIgv = this.round(totalIgv, 2);

    let totalGravadaConDescuento = totalGravado - (totalGravado * porcentajeDescuento);
    let totalExoneradaConDescuento = totalExonerado - (totalExonerado * porcentajeDescuento);
    let totalInafectaConDescuento = totalInafecto - (totalInafecto * porcentajeDescuento);
    let totalIgvConDescuento = totalIgv - (totalIgv * porcentajeDescuento);
    totalGravadaConDescuento = this.round(totalGravadaConDescuento, 2);
    totalExoneradaConDescuento = this.round(totalExoneradaConDescuento, 2);
    totalInafectaConDescuento = this.round(totalInafectaConDescuento, 2);
    totalIgvConDescuento = this.round(totalIgvConDescuento, 2);

    // Descuento global
    const descuentoGlobal =
      (totalGravado - totalGravadaConDescuento) +
      (totalExonerado - totalExoneradaConDescuento) +
      (totalInafecto - totalInafectaConDescuento);

    // Calculo del total
    const total = totalGravadaConDescuento +
      totalExoneradaConDescuento +
      totalInafectaConDescuento +
      totalIgvConDescuento +
      totalOtrosCargos;

    this.form.patchValue({
      totalGratuita: totalGratuita,
      totalGravada: totalGravadaConDescuento,
      totalExonerada: totalExoneradaConDescuento,
      totalInafecta: totalInafectaConDescuento,
      totalIgv: totalIgvConDescuento,
      descuentoGlobal: descuentoGlobal,
      total: total
    });
  }

  loadDataForm() {
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

  loadDataDetalle(formGroup: FormGroup) {
    if (this.tiposDeAfectacionIgv && this.tiposDeAfectacionIgv.length > 0) {
      formGroup.patchValue({
        tipoDeIgv: this.tiposDeAfectacionIgv[0].codigo
      });
    }
  }

  round(value: number, spaces?: number): number {
    if (!spaces) {
      spaces = 2;
    }
    return Math.round(value * Math.pow(10, spaces)) / Math.pow(10, spaces);
  }

  get detalle(): FormArray {
    return this.form.get('detalle') as FormArray;
  }

}
