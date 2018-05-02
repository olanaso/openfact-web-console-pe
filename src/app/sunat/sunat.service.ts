import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import * as TecactusApi from './sunat';
declare var TecactusApi: any;

@Injectable()
export class SunatService {

  private tecactusApi;

  constructor() {
    this.tecactusApi = new TecactusApi("WhH5vluey4pmMbbobHYzcdWJO7sielXtgMSMne3N")
  }

  search(numeroDocumento: string): Observable<any> {
    return Observable.create((observer) => {
      if (numeroDocumento.length === 11) {
        this.tecactusApi.Sunat.getByRuc(numeroDocumento).then(function (response) {
          if (typeof response.data !== 'string') {
            observer.next(response.data);
          } else {
            observer.error({ message: 'Numero documento invalido' });
          }
          observer.complete();
        }).catch(function (err) {
          observer.error(err);
        });
      } else if (numeroDocumento.length === 8) {
        this.tecactusApi.Sunat.getByDni(numeroDocumento).then(function (response) {
          if (typeof response.data !== 'string') {
            observer.next(response.data);
          } else {
            observer.error({ message: 'Numero documento invalido' });
          }
          observer.complete();
        }).catch(function (err) {
          observer.error(err);
        })
      } else {
        observer.error('Invalid parameter:' + numeroDocumento);
      };
    });
  }
}
