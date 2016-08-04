import { Injectable } from '@angular/core';
import { InvoiceModel } from '../models/invoice-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { ProviderService } from './provider.service';

@Injectable()
export class InvoiceProviderService extends ProviderService<InvoiceModel> {

  private static path: string = '/invoices';

  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(InvoiceProviderService.path, restangularOpenfactService);
  }

  build(): InvoiceModel {
    let model: InvoiceModel = new InvoiceModel(this.getRestangularService());
    return model;
  }
}
