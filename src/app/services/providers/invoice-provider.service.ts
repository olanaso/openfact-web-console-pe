import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Provider } from './provider';
import { InvoiceModel } from '../models/invoice-model';

import { Restangular } from '../restangular/restangular';
import { OpenfactService } from '../restangular-impl/openfact.service';

const ID: string = 'id';
const PATH: string = 'invoices';

@Injectable()
export class InvoiceProviderService implements Provider {

  public path: string = PATH;

  private id: string = ID;
  private restangular: Restangular;

  constructor(restangular: OpenfactService) {
    this.restangular = restangular;
  }

}
