import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PESUNATService, SUNATGenericType, Context, Contexts, Company, UBLDocument } from './../../../ngx-openfact';
import { DocumentContextService } from './../documents-context.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/publish';

@Component({
  selector: 'of-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  company: Company;
  UBLDocument: UBLDocument;

  working = false;
  modoAvanzado: boolean;
  documentForm: FormGroup;

  monedas = [{ codigo: 'PEN', alias: 'S/.' }, { codigo: 'USD', alias: '$' }];

  IGV: SUNATGenericType;
  tiposIGV: SUNATGenericType[] = [];
  tiposInvoice: SUNATGenericType[] = [];
  tiposDocumentoIdentidad: SUNATGenericType[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contexts: Contexts,
    private documentContext: DocumentContextService
  ) {
    this.buildForm();

    this.subscriptions.push(
      contexts.current
        .do((val) => {
          this.company = val.company;
          this.UBLDocument = val.document;
        })
        .switchMap((val) => documentContext.IGV).do((val) => this.IGV = val)
        .switchMap((val) => documentContext.tiposIGV).do((val) => this.tiposIGV = val)
        .switchMap((val) => documentContext.tiposInvoice).do((val) => this.tiposInvoice = val)
        .switchMap((val) => documentContext.tiposDocumentosIdentidad).do((val) => this.tiposDocumentoIdentidad = val)
        .do(() => {
          this.patchFormWithDefaults();
          if (this.UBLDocument) {
            this.patchFormWithDocument();
          }
        })
        .publish().connect()
    );
  }

  ngOnInit() {

  }

  buildForm() {
    this.documentForm = this.formBuilder.group({
      tipoInvoice: [null, Validators.compose([Validators.required])],
      serie: [null, Validators.compose([Validators.maxLength(4)])],
      numero: [null, Validators.compose([Validators.maxLength(8)])],
      moneda: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      igv: [null, Validators.compose([Validators.required])],

      operacionGratuita: [false, Validators.compose([Validators.required])],
      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      documentoIdentidadCliente: [null, Validators.compose([Validators.required])],
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

      detalle: [null, Validators.compose([Validators.required])]
    });


    this.subscriptions.push(

      // Watch tipo invoice changes
      this.documentForm.get('tipoInvoice').valueChanges
        .filter((val) => val !== undefined && val !== null)
        .subscribe((val: SUNATGenericType) => {
          let documentoIdentidad: SUNATGenericType;
          if (val.codigo === '01') { // Factura
            documentoIdentidad = this.findDocumentoIdentidad('6'); // RUC
          } else if (val.codigo === '03') {
            documentoIdentidad = this.findDocumentoIdentidad('1'); // DNI
          }
          this.documentForm.patchValue({
            documentoIdentidadCliente: documentoIdentidad
          });
        })
      // End

    );

  }

  patchFormWithDefaults() {
    this.documentForm.patchValue({
      tipoInvoice: this.tiposInvoice[0]
    });
  }

  patchFormWithDocument() {

  }

  save() {

  }

  changeToMonedaNacional() {
    this.documentForm.removeControl('tipoDeCambio');
  }

  changeToMonedaExtrangera() {
    this.documentForm.addControl('tipoDeCambio', this.formBuilder.control(null, Validators.compose([Validators.required])));
  }

  findDocumentoIdentidad(codigo: string) {
    return this.tiposDocumentoIdentidad.find((val) => val.codigo === codigo);
  }

}
