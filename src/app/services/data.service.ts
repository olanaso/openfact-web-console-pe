import { Injectable } from '@angular/core';
import { OrganizationProviderService, InvoiceProviderService } from './providers';

@Injectable()
export class DataService {

  constructor(
    private organizationProvider: OrganizationProviderService,
    private invoiceProvider: InvoiceProviderService) {
  }

  public organizations(): OrganizationProviderService {
    return this.organizationProvider;
  }

  public invoices(): InvoiceProviderService {
    return this.invoiceProvider;
  }

}
