import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { InvoiceModel } from '../models/invoice-model';

import { Restangular } from '../restangular/restangular';
import { OpenfactService } from '../restangular-impl/openfact.service';

export const ID: string = 'name';
export const PATH: string = 'invoices';

@Injectable()
export class InvoiceProviderService implements Provider {

  public path: string = PATH;

  private id: string = ID;
  private restangular: Restangular;

  constructor(restangular: OpenfactService) {
    this.restangular = restangular;
  }

  public build(): InvoiceModel {
    return new InvoiceModel(this.restangular);
  }

  public findById(id: string): Observable<InvoiceModel> {
    let restangular = this.restangular.one(this.path, id);
    return restangular.get()
      .map(result => this.extractObject(result, restangular))
      .map(model => this.extractSingleData(model, restangular, false));
  }

  public getAll(): Observable<InvoiceModel[]> {
    let restangular = this.restangular.all(this.path);
    return restangular.get()
      .map(result => result.json())
      .map(models => this.extractMultipleData(models, restangular));
  }

  public create(invoice: InvoiceModel): Observable<InvoiceModel> {
    let copy = invoice.clone();

    let restangular = this.restangular.all(this.path);
    return restangular.post(copy)
      .map(result => this.extractObject(result, restangular))
      .map(model => this.extractSingleData(model, restangular, true));
  }


  protected extractObject(res: Response, restangular: Restangular) {
    let obj = new InvoiceModel(restangular);
    if (res.status === 201) {
      return obj;
    } else {
      let response = <InvoiceModel>res.json();
      return Object.assign(obj, response);
    }
  }

  /*Extract data*/
  protected extractSingleData(invoice: InvoiceModel, restangular: Restangular, requireOne: boolean) {
    if (requireOne) {
      invoice.restangular = restangular.one('', invoice[this.id]);
    }
    return invoice;
  }

  protected extractMultipleData(invoices: InvoiceModel[], restangular: Restangular) {
    for (let i = 0; i < invoices.length; i++) {
      let obj = new InvoiceModel(restangular);
      invoices[i] = Object.assign(obj, invoices[i]);
      this.extractSingleData(invoices[i], restangular, true)
    }
    return invoices;
  }

}
