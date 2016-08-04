import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer-model';
import { RestangularOpenfactService } from './rest/restangular-openfact.service';
import { GenericOpenfactService } from './generic-openfact.service';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CustomerService extends GenericOpenfactService<CustomerModel>{

  private static path: string = "/invoices";
  constructor(restangularOpenfactService: RestangularOpenfactService) {
    super(CustomerService.path, restangularOpenfactService);
  }
  build(): CustomerModel {
    let model: CustomerModel = new CustomerModel(this.getRestangularService());
    return model;
  }

}
