import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUNATGenericType, PESUNATService } from './../../ngx-openfact';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/distinctUntilKeyChanged';

@Injectable()
export class DocumentContextService {

  IGV: Subject<SUNATGenericType> = new ReplaySubject<SUNATGenericType>(1);
  tiposDocumentosIdentidad: Subject<SUNATGenericType[]> = new ReplaySubject<SUNATGenericType[]>(1);;
  tiposIGV: Subject<SUNATGenericType[]> = new ReplaySubject<SUNATGenericType[]>(1);;
  tiposInvoice: Subject<SUNATGenericType[]> = new ReplaySubject<SUNATGenericType[]>(1);

  constructor(private sunatService: PESUNATService) { }

  loadIGV(): Observable<SUNATGenericType> {
    return this.sunatService.getIGV()
      .do((val) => this.IGV.next(val));
  }

  loadTiposInvoice(): Observable<SUNATGenericType[]> {
    return this.sunatService.getTiposInvoice()
      .do((val) => this.tiposInvoice.next(val));
  }

  loadTiposDocumentosIdentidad(): Observable<SUNATGenericType[]> {
    return this.sunatService.getTiposDocumentoIdentidad()
      .do((val) => this.tiposDocumentosIdentidad.next(val));;
  }

  loadTiposIGV(): Observable<SUNATGenericType[]> {
    return this.sunatService.getTiposAfectacionIGV()
      .do((val) => this.tiposIGV.next(val));
  }

}
