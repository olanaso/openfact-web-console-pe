import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PESUNATService, SUNATGenericType } from './../../../ngx-openfact';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'of-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {

  form: FormGroup;
  working = false;

  monedas = [{ codigo: 'PEN', alias: 'S/.' }, { codigo: 'USD', alias: '$' }];

  IGV: SUNATGenericType;
  tiposInvoice: SUNATGenericType[] = [];
  tiposDocumentoIdentidad: SUNATGenericType[] = [];
  tiposDeAfectacionIGV: SUNATGenericType[] = [];

  formularioDetallado;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sunatService: PESUNATService
  ) {
    this.sunatService.getIGV().subscribe((val) => {
      this.IGV = val;
    });
    this.sunatService.getTiposInvoice().subscribe((val) => {
      this.tiposInvoice = val;
    });
    this.sunatService.getTiposDocumentoIdentidad().subscribe((val) => {
      this.tiposDocumentoIdentidad = val;
    });
    this.sunatService.getTiposAfectacionIGV().subscribe((val) => {
      this.tiposDeAfectacionIGV = val;
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  save() {

  }

  buildForm() {
    this.form = this.formBuilder.group({
      tipoInvoice: [null, Validators.compose([Validators.required])],
      serie: [null, Validators.compose([Validators.maxLength(4)])],
      numero: [null, Validators.compose([Validators.maxLength(8)])],
      moneda: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      igv: [null, Validators.compose([Validators.required])],

      operacionGratuita: [false, Validators.compose([Validators.required])],
      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      tipoDocumentoIdentidadCliente: [null, Validators.compose([Validators.required])],
      numeroDocumentoCliente: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(20)])],
      nombreCliente: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      emailCliente: [null, Validators.compose([Validators.maxLength(150)])],
      direccionCliente: [null, Validators.compose([Validators.maxLength(150)])],

      enviarSUNAT: [true, Validators.compose([Validators.required])],
      enviarEmailCliente: [true, Validators.compose([Validators.required])],

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
  }

  changeToMonedaNacional() {
    this.form.removeControl('tipoDeCambio');
  }

  changeToMonedaExtrangera() {
    this.form.addControl('tipoDeCambio', this.formBuilder.control(null, Validators.compose([Validators.required])));
  }

}
