import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Restangular } from './restangular';

export const BASE_PATH: string = 'http://localhost:8081/openfact';

@Injectable()
export class RestangularOpenfact extends Restangular {

  constructor(http: Http) {
    super(http);
    this.path = BASE_PATH;
  }

}