import { CreditNoteService } from './credit-note.service';
import { DebitNoteService } from './debit-note.service';
import { Injectable } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { OrganizationService } from './organization.service';
import { ServerInfoService } from './server-info.service';

@Injectable()
export class DataService {

  constructor(
    private organizationService: OrganizationService,
    private serverInfoService: ServerInfoService,
    private invoiceService: InvoiceService,
    private creditNoteService: CreditNoteService,
    private debitNoteService: DebitNoteService) { }

  organizations() {
    return this.organizationService;
  }

  serverInfo() {
    return this.serverInfoService;
  }

  invoices() {
    return this.invoiceService;
  }

  creditNotes() {
    return this.creditNoteService;
  }

  debitNotes() {
    return this.debitNoteService;
  }

}
