import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { InvoiceModel } from '../models/invoice-model';

import { Restangular } from '../restangular/restangular';
import { OpenfactService } from '../restangular-impl/openfact.service';

export const INVOICE_ID: string = 'name';
export const INVOICE_PATH: string = 'invoices';

@Injectable()
export class InvoiceProviderService implements Provider {

  public path: string = INVOICE_PATH;

  private id: string = INVOICE_ID;
  private restangular: Restangular;

  constructor(restangular: OpenfactService) {
    this.restangular = restangular;
  }

}
