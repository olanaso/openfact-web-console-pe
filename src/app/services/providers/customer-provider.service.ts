import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer-model';
import { RestangularOpenfactService } from './restangular-openfact.service';
import { GenericOpenfactService } from '../generic-openfact.service';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CustomerProviderService extends GenericOpenfactService<CustomerModel>{

  private static path: string = "/invoices";
  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(CustomerProviderService.path, restangularOpenfactService);
  }
  build(): CustomerModel {
    let model: CustomerModel = new CustomerModel(this.getRestangularService());
    return model;
  }

}
