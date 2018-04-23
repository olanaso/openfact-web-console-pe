import { TotalAdditionalInformation } from './../document-form/total-additional-information';
import { InvoiceLine } from './../../../ngx-openfact/models/invoice';
import { DocumentLine } from './../document-form/document-line';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Notification, NotificationType, Notifications } from './../../../ngx-base';
import {
  PESUNATService,
  SUNATGenericType,
  Context, Contexts,
  Organization, UBLDocument,
  UBLDocumentService,
  PEUBLDocumentService,
  Invoice,
  Fecha,
  Cliente,
  Moneda
} from './../../../ngx-openfact';
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

  company: Organization;
  invoice: Invoice;

  working = false;
  modoAvanzado = false;
  documentForm: FormGroup;

  monedas = [
    { codigo: 'PEN', alias: 'S/.' },
    { codigo: 'USD', alias: '$' },
    { codigo: 'EUR', alias: '€' }
  ];

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
    private documentContext: DocumentContextService,
    private documentService: PEUBLDocumentService,
    private notifications: Notifications,
  ) {
    this.buildForm();

    this.subscriptions.push(
      contexts.current
        .do((val) => {
          this.company = val.organization;
        })
        .switchMap((val) => documentContext.IGV).do((val) => this.IGV = val)
        .switchMap((val) => documentContext.tiposIGV).do((val) => this.tiposIGV = val)
        .switchMap((val) => documentContext.tiposInvoice).do((val) => this.tiposInvoice = val)
        .switchMap((val) => documentContext.tiposDocumentosIdentidad).do((val) => this.tiposDocumentoIdentidad = val)
        .switchMap((val) => documentContext.invoice).do((val) => this.invoice = val)
        .do(() => {
          this.patchFormWithDefaults();
          if (this.invoice && this.invoice.id) {
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

      moneda: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      tipoCambio: [null, Validators.compose([])],

      fechaEmision: [null, Validators.compose([])],
      fechaVencimiento: [null, Validators.compose([])],

      serie: [null, Validators.compose([Validators.maxLength(4)])],
      numero: [null, Validators.compose([Validators.maxLength(8)])],
      igv: [null, Validators.compose([Validators.required])],

      tipoDocumentoCliente: [null, Validators.compose([Validators.required])],
      numeroDocumentoCliente: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(20)])],
      nombreCliente: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      emailCliente: [null, Validators.compose([Validators.maxLength(150)])],
      direccionCliente: [null, Validators.compose([Validators.maxLength(150)])],

      operacionGratuita: [false, Validators.compose([Validators.required])],

      enviarSunat: [true, Validators.compose([Validators.required])],
      enviarCliente: [true, Validators.compose([Validators.required])],

      observaciones: [null, Validators.compose([Validators.maxLength(150)])],

      detalle: [null, Validators.compose([Validators.required])],
      informacionAdicional: [null, Validators.compose([Validators.required])]
    });


    // Watch tipo invoice changes
    this.subscriptions.push(
      this.documentForm.get('tipoInvoice').valueChanges
        .filter((val) => val !== undefined && val !== null)
        .subscribe((val: SUNATGenericType) => {
          let documentoIdentidad: SUNATGenericType;
          if (val.codigo === '01') { // Factura
            documentoIdentidad = this.findDocumentoIdentidad('6'); // RUC
          } else if (val.codigo === '03') { // Boleta
            documentoIdentidad = this.findDocumentoIdentidad('1'); // DNI
          }
          this.documentForm.patchValue({
            tipoDocumentoCliente: documentoIdentidad
          });
        })
    );

    // Watch tipo documento changes
    this.subscriptions.push(
      this.documentForm.get('tipoDocumentoCliente').valueChanges
        .filter((val) => val !== undefined && val !== null)
        .subscribe((val: SUNATGenericType) => {
          this.documentForm.get('numeroDocumentoCliente').setValidators(Validators.compose([
            Validators.required,
            Validators.minLength(val.longitud),
            Validators.maxLength(val.longitud)
          ]));
        })
    );
  }

  patchFormWithDefaults() {
    this.documentForm.patchValue({
      tipoInvoice: this.tiposInvoice[0],
      moneda: this.monedas[0].codigo,
      igv: this.IGV.valor,
      fechaEmision: new Date(),
      fechaVencimiento: new Date(),
      enviarSunat: true,
      enviarCliente: true,
    });
  }

  patchFormWithDocument() {
    console.log('vall', this.invoice);
    // this.documentForm.patchValue({

    // });
  }

  save() {
    if (!this.invoice || !this.invoice.id) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.working = true;

    const invoice = {} as Invoice;
    invoice.serie = this.documentForm.value.serie;
    invoice.numero = this.documentForm.value.serie;

    invoice.fecha = {
      emision: this.documentForm.value.fechaEmision,
      vencimiento: this.documentForm.value.vencimiento
    } as Fecha;

    invoice.cliente = {
      tipoDocumento: this.documentForm.value.tipoDocumentoCliente.codigo,
      numeroDocumento: this.documentForm.value.numeroDocumentoCliente,
      nombre: this.documentForm.value.nombreCliente,
      email: this.documentForm.value.emailCliente,
      direccion: this.documentForm.value.direccionCliente,
    } as Cliente;

    invoice.moneda = {
      codigo: this.documentForm.value.moneda,
      tipoCambio: this.documentForm.value.tipoCambio
    } as Moneda;

    invoice.enviarCliente = this.documentForm.value.enviarCliente;
    invoice.enviarSunat = this.documentForm.value.enviarSunat;

    // Informacion adicional
    const informacionAdicional: TotalAdditionalInformation = this.documentForm.value.informacionAdicional;
    invoice.total = {
      pagar: Math.round(informacionAdicional.total * 100) / 100,
      otrosCargos: Math.round(informacionAdicional.otrosCargos * 100) / 100,
      descuentoGlobal: Math.round(informacionAdicional.totalDescuento * 100) / 100
    };

    invoice.totalImpuestos = {
      igv: Math.round(informacionAdicional.totalIGV * 100) / 100,
      isc: null
    };

    invoice.totalInformacionAdicional = {
      totalGravado: Math.round(informacionAdicional.totalGravado * 100) / 100,
      totalGratuito: Math.round(informacionAdicional.totalGratuito * 100) / 100,
      totalInafecto: Math.round(informacionAdicional.totalInafecto * 100) / 100,
      totalExonerado: Math.round(informacionAdicional.totalExonerado * 100) / 100
    };

    // Detalle
    invoice.detalle = (this.documentForm.value.detalle as DocumentLine[]).map((value) => {
      let invoiceLine: InvoiceLine = {} as InvoiceLine;
      invoiceLine.unidadMedida = value.unidadMedida;
      invoiceLine.descripcion = value.descripcion;
      invoiceLine.tipoIGV = value.tipoIGV.codigo;
      invoiceLine.cantidad = value.cantidad;
      invoiceLine.valorUnitario = value.valorUnitario;
      invoiceLine.precioUnitario = Math.round(value.precioUnitario * 100) / 100;
      invoiceLine.subtotal = Math.round(value.subtotal * 100) / 100;
      invoiceLine.total = Math.round(value.total * 100) / 100;
      invoiceLine.totalIGV = Math.round(value.totalIGV * 100) / 100;
      invoiceLine.totalISC = null;
      return invoiceLine;
    });

    const tipoInvoice: SUNATGenericType = this.documentForm.value.tipoInvoice;
    let creationSubscription: Observable<any>;
    if (tipoInvoice.codigo === '01') {
      creationSubscription = this.documentService.createFactura(this.company.id, invoice);
    } else if (tipoInvoice.codigo === '03') {
      creationSubscription = this.documentService.createBoleta(this.company.id, invoice);
    } else {
      alert('Tipo de Invoice Inválido');
    }

    creationSubscription.subscribe(
      (val) => {
        this.notifications.message({
          message: `Documento Creado!`,
          type: NotificationType.SUCCESS
        } as Notification);
        this.working = false;
        this.router.navigate(['../_search'], { relativeTo: this.route.parent });
      },
      (err) => {
        this.notifications.message({
          message: `Error al crear el Documento!`,
          type: NotificationType.DANGER
        } as Notification);
        this.working = false;
      }
    );
  }

  update() {

  }


  private findDocumentoIdentidad(codigo: string) {
    return this.tiposDocumentoIdentidad.find((val) => val.codigo === codigo);
  }

}
