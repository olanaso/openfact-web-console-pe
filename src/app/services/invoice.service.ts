import { Injectable } from '@angular/core';
import { InvoiceModel } from '../models/invoice-model';
import { RestangularOpenfactService } from './rest/restangular-openfact.service';
import { GenericOpenfactService } from './generic-openfact.service';

@Injectable()
export class InvoiceService extends GenericOpenfactService<InvoiceModel>{

  private static path: string = "/invoices";

  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(InvoiceService.path, restangularOpenfactService);
  }

  build(): InvoiceModel {
    let model: InvoiceModel = new InvoiceModel(this.getRestangularService());
    return model;
  }

}
