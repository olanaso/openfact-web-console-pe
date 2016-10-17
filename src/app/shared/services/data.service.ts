import { Injectable } from '@angular/core';

import { OrganizationService } from './organization.service';
import { InvoiceService } from './invoice.service';
import { CreditnoteService } from './creditnote.service';
import { DebitnoteService } from './debitnote.service';

@Injectable()
export class DataService {

  constructor(
    private organization: OrganizationService,
    private invoice: InvoiceService,
    private creditnote: CreditnoteService,
    private debitnote: DebitnoteService) {
  }

  public organizations(): OrganizationService {
    return this.organization;
  }

  public invoices(): InvoiceService {
    return this.invoice;
  }

  public creditnotes(): CreditnoteService {
    return this.creditnote;
  }

  public debitnotes(): DebitnoteService {
    return this.debitnote;
  }

}
