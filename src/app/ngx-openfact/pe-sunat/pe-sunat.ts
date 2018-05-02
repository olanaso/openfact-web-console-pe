import { SUNATGenericType } from './../models/pe-sunat-generic-type';
import { OPENFACT_API_URL } from './../api/openfact-api';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PESUNATService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private peSUNATUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.peSUNATUrl = apiUrl.endsWith('/') ? apiUrl + 'pe/sunat' : apiUrl + '/pe/sunat';
  }

  getTiposInvoice(): Observable<SUNATGenericType[]> {
    return this.getGenericType('tipos-invoice');
  }

  getTiposDocumentoIdentidad(): Observable<SUNATGenericType[]> {
    return this.getGenericType('tipos-documento-identidad');
  }

  getTiposAfectacionIGV(): Observable<SUNATGenericType[]> {
    return this.getGenericType('tipos-afectacion-igv');
  }

  getIGV(): Observable<SUNATGenericType> {
    const url = `${this.peSUNATUrl}/igv`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as SUNATGenericType;
      });
  }

  private getGenericType(path: string): Observable<SUNATGenericType[]> {
    const url = `${this.peSUNATUrl}/${path}`;
    return this.http
      .get(url, { headers: this.headers })
      .map(response => {
        return response as SUNATGenericType[];
      });
  }

}
