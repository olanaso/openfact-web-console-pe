import { Injectable } from '@angular/core';
import { OrganizationService } from './organization.service';
import { InvoiceService } from './invoice.service';

@Injectable()
export class DataService {

  private organizationService: OrganizationService;
  private invoiceService: InvoiceService;

  constructor(
    organizationService: OrganizationService, 
    invoiceService: InvoiceService) { 
    this.organizationService = organizationService;
    this.invoiceService= invoiceService;
  }

  organizations() {
    return this.organizationService;
  }

  invoices() {
    return this.invoiceService;
  }

}
