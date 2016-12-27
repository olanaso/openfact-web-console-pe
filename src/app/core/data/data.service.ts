import { Injectable, Inject } from '@angular/core';

import { OrganizationService } from './organization.service';
import { InvoiceService } from './invoice.service';
import { CreditnoteService } from './creditnote.service';
import { DebitnoteService } from './debitnote.service';
import { RetentionService } from './retention.service';
import { PerceptionService } from './perception.service'
import { ServerInfoService } from './server-info.service';
import { EventService } from './event.service';
import { StorageFileService } from './storage-file.service';

import { OrganizationPeService } from './organization-pe.service';

@Injectable()
export class DataService {

  constructor(
    private organization: OrganizationService,
    private invoice: InvoiceService,
    private creditnote: CreditnoteService,
    private debitnote: DebitnoteService,
    private perception: PerceptionService,
    private retention: RetentionService,
    private serverinfo: ServerInfoService,
    private event: EventService,
    private storageFile: StorageFileService,
    private organizationPe: OrganizationPeService) {
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

  public perceptions(): PerceptionService {
    return this.perception;
  }

  public retentions(): RetentionService {
    return this.retention;
  }

  public serverInfo(): ServerInfoService {
    return this.serverinfo;
  }

  public events(): EventService {
    return this.event;
  }

  public storageFiles(): StorageFileService {
    return this.storageFile;
  }

  public organizationPeru(): OrganizationPeService {
    return this.organizationPe;
  }

}
