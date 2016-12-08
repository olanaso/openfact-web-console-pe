import { Restangular } from '../data/restangular';
import { Observable } from 'rxjs/Observable';
import { Response, Headers, ResponseContentType } from '@angular/http';

export abstract class Model {

  restangular: Restangular;

  constructor() { }

  save(obj?: any) {
    if (obj) {
      return this.restangular.put(obj);
    } else {
      return this.restangular.put(this);
    }
  }

}
