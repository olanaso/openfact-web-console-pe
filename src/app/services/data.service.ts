import { Injectable } from '@angular/core';
import { OrganizationProviderService } from './providers/organization-provider.service';
import { InvoiceProviderService } from './providers/invoice-provider.service';

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
