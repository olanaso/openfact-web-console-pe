import { CreditNoteService } from './credit-note.service';
import { DebitNoteService } from './debit-note.service';
import { DocumentService } from './document.service';
import { Injectable } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { OrganizationService } from './organization.service';
import { ServerInfoService } from './server-info.service';

@Injectable()
export class DataService {

  constructor(
    private organizationService: OrganizationService,
    private serverInfoService: ServerInfoService,
    private documentService: DocumentService,
    private invoiceService: InvoiceService,
    private creditNoteService: CreditNoteService,
    private debitNoteService: DebitNoteService) { }

  organizations(): OrganizationService {
    return this.organizationService;
  }

  serverInfo(): ServerInfoService {
    return this.serverInfoService;
  }

  documents(): DocumentService {
    return this.documentService;
  }

  invoices(): InvoiceService {
    return this.invoiceService;
  }

  creditNotes(): CreditNoteService {
    return this.creditNoteService;
  }

  debitNotes(): DebitNoteService {
    return this.debitNoteService;
  }

}
