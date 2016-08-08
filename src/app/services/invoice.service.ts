import { Injectable } from '@angular/core';
import { InvoiceModel } from './models/invoice-model';
import { RestangularOpenfactService } from './providers/restangular-openfact.service';
import { GenericOpenfactService } from './generic-openfact.service';
import { OrganizationModel } from './models/organization-model';
import { Observable }     from 'rxjs/Observable';

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
  
  // buildOrganizations(): InvoiceService {
  //   // let model: OrganizationModel = new OrganizationModel(this.getRestangularService());
  //   // InvoiceService.path = model.getPath() + InvoiceService.path;
  //   return new InvoiceService(this.getRestangularService());
  // }

  // getAllPrueba(organization: OrganizationModel): Observable<InvoiceModel[]> {
  //   return this.getRestangularService()
  //     .all(organization.restangular.getPath()).all(InvoiceService.path)
  //     .get()
  //     .map(result => <InvoiceModel[]>result.json())
  //     .map(models => this.extractMultipleData(models));
  // }

}
