import { Injectable } from '@angular/core';
import { InvoiceModel } from '../models/invoice-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { ProviderService } from './provider.service';

@Injectable()
export class InvoiceProviderService extends ProviderService<InvoiceModel> {

  private static idName: string = 'id';
  private static resourcePath: string = 'invoices';

  constructor(restangularService: RestangularOpenfactService) {
    super(restangularService, InvoiceProviderService.resourcePath, InvoiceProviderService.idName);
  }

  build(): InvoiceModel {
    let model: InvoiceModel = new InvoiceModel(this.restangularService);
    return model;
  }
}
