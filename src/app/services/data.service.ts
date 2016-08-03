import { Injectable } from '@angular/core';
import { OrganizationProviderService } from './providers/organization-provider.service';
import { InvoiceProviderService } from './providers/invoice-provider.service';

@Injectable()
export class DataService {

  private organizationProviderService: OrganizationProviderService;
  private invoiceProviderService: InvoiceProviderService;

  constructor(
    organizationProviderService: OrganizationProviderService, 
    invoiceProviderService: InvoiceProviderService) { 
    this.organizationProviderService = organizationProviderService;
    this.invoiceProviderService= invoiceProviderService;
  }

  organizations(): OrganizationProviderService {
    return this.organizationProviderService;
  }

  invoices(): InvoiceProviderService {
    return this.invoiceProviderService;
  }

}
