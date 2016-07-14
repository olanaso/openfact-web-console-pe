import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions } from '@angular/http'

import { Factura } from './factura';
import { FACTURAS } from './facturas-mock';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FacturaService {

  constructor(private http: Http) { }

  private facturasUrl = 'app/services/facturas';//URL TO WEB API


  getFacturas(): Observable<Factura[]> {
    return this.http.get(this.facturasUrl)
      .map(this.extractData);
      //.catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  // See the "Take it slow" appendix
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve =>
  //     setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  //   );
  // }
  addFactura (name: string): Observable<Factura> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.facturasUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
