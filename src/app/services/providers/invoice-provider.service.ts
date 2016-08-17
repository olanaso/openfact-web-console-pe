import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { OrganizationModel, InvoiceModel } from '../models';

import { Restangular } from '../restangular';
import { OpenfactService } from '../restangular-impl';


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

  public build(): InvoiceModel {
    return new InvoiceModel(this.restangular);
  }

  public findById(organization: OrganizationModel, id: string): Observable<InvoiceModel> {
    let restangular = this.restangular.base(organization.restangular.path).one(this.path, id);
    return restangular.get()
      .map(result => this.extractObject(result, restangular))
      .map(model => this.extractSingleData(model, restangular, false));
  }

  public getAll(organization: OrganizationModel): Observable<InvoiceModel[]> {
    let restangular = this.restangular.base(organization.restangular.path).all(this.path);
    return restangular.get()
      .map(result => result.json())
      .map(models => this.extractMultipleData(models, restangular));
  }

  public create(organization: OrganizationModel, invoice: InvoiceModel): Observable<InvoiceModel> {
    let copy = invoice.clone();
    let restangular = this.restangular.base(organization.restangular.path).all(this.path);
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
