import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http'

import { Factura } from '../../app/models/factura';
import { FacturaDetalle } from '../../app/models/factura-detalle';
import { MONEDA } from '../../app/models/mock-moneda';
// import { FACTURAS } from './facturas-mock';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FacturaService {
  //private heroesUrl = 'app/heroes';
  private items: FacturaDetalle[];
  constructor(private http: Http) { 
    this.items=[];
  }

  getMoneda(){
    return MONEDA;
  }

  private facturasUrl = './facturas';//URL TO WEB API

  save(facturaDetalle: FacturaDetalle): Promise<FacturaDetalle> {
    console.log("ANTES DE GRABAR ..." + JSON.stringify(facturaDetalle));
    if (facturaDetalle.idFacturaDetalle) {
      return this.put(facturaDetalle);
    }
    return this.post(facturaDetalle);
  }

  // Update existing Hero
  private put(facturaDetalle: FacturaDetalle) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.facturasUrl}/${facturaDetalle.idFacturaDetalle}`;

    return this.http
      .put(url, JSON.stringify(facturaDetalle), { headers: headers })
      .toPromise()
      .then(() => facturaDetalle)
      .catch(this.handleError);
  }

  // Add new Hero
  private post(facturaDetalle: FacturaDetalle): Promise<FacturaDetalle> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.facturasUrl, JSON.stringify(facturaDetalle), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
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
  addFactura(name: string): Observable<Factura> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.facturasUrl, body, options)
      .map(this.extractData);
    // .catch(this.handleError);
  }

  // saveDetalle():Observable<Factura.facturaDetalle>
  // saveDetalle(facturaDetalle: FacturaDetalle): Promise<Hero>  {
  //   if (facturaDetalle.idFacturaDetalle) {
  //     return this.put(facturaDetalle);
  //   }
  //   //return this.post(facturaDetalle);
  // }

  //  private post(facturaDetalle: FacturaDetalle): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'});

  //   return this.http
  //              .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //              .toPromise()
  //              .then(res => res.json().data)
  //              .catch(this.handleError);
  // }

  // Update existing Hero
  // private put(facturaDetalle: FacturaDetalle) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = `${this.facturasUrl}/${facturaDetalle.idFacturaDetalle}`;

  //   return this.http
  //              .put(url, JSON.stringify(facturaDetalle), {headers: headers})
  //              .toPromise()
  //              .then(() => facturaDetalle)
  //              .catch(this.handleError);
  // }
}
