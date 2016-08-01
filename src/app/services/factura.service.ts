import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http'
// import { Factura } from '../../app/models/factura';
// import { FacturaDetalle } from '../../app/models/factura-detalle';
import { Invoice } from '../../app/models/invoice';
import { InvoiceDetails } from '../../app/models/invoiceDetails';

import { MONEDA } from '../../app/models/mock-moneda';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class FacturaService {
  //private heroesUrl = 'app/heroes';

  constructor(private http: Http) {
  }

  getMoneda() {
    return MONEDA;
  }

  private facturasUrl = './facturas';//URL TO WEB API
  private invoiceUrl = 'http://192.168.1.38:8080/admin/organizations/master/invoices/';

  saveInvoice(invoice: Invoice): Observable<Invoice> {

    const headers = new Headers();
    const body = JSON.stringify(invoice);
    headers.append('Content-Type', 'application/json');
    console.log("Aqui en el servicio :" + body);
    return this.http.post(this.invoiceUrl, body, { headers })      //added return
      .map(res => res.json())
      .catch(error => Observable.throw('Server error'));
  }

}
