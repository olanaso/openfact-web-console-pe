import { Injectable } from '@angular/core';

import { OrganizationService } from './organization.service';
import { InvoiceService } from './invoice.service';

@Injectable()
export class DataService {

  constructor(
    private organization: OrganizationService,
    private invoice: InvoiceService) {
  }

  public organizations(): OrganizationService {
    return this.organization;
  }

  public invoices(): InvoiceService {
    return this.invoice;
  }

}
