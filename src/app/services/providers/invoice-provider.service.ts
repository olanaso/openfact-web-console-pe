import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Provider } from './provider';
import { OrganizationModel, InvoiceModel } from '../models';

import { Restangular } from '../restangular';
import { OpenfactService } from '../restangular-impl';

import { ResponseToModel, ObjectBuilder } from '../utils';

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
      .map(result => ResponseToModel.toModel<InvoiceModel>(result, restangular, new ObjectBuilder<InvoiceModel>(InvoiceModel)));
  }

  public getAll(organization: OrganizationModel): Observable<InvoiceModel[]> {
    let restangular = this.restangular.base(organization.restangular.path).all(this.path);
    return restangular.get()
      .map(result => ResponseToModel.toModels<InvoiceModel>(result, restangular, new ObjectBuilder<InvoiceModel>(InvoiceModel)));
  }

  public create(organization: OrganizationModel, invoice: InvoiceModel): Observable<InvoiceModel> {
    let restangular = this.restangular.base(organization.restangular.path).all(this.path);
    return restangular.post(invoice.copy())
      .map(result => ResponseToModel.toModel<InvoiceModel>(result, restangular, new ObjectBuilder<InvoiceModel>(InvoiceModel), true));
  }

}
