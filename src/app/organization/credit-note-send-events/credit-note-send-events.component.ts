import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { CreditNote } from '../../core/models/credit-note.model';

@Component({
  selector: 'of-credit-note-send-events',
  templateUrl: './credit-note-send-events.component.html',
  styleUrls: ['./credit-note-send-events.component.scss']
})
export class CreditNoteSendEventsComponent implements OnInit, OnDestroy {

  private parentDataSubscription: Subscription;
  private dataSubscription: Subscription;

  private organization: Organization;
  private creditNote: CreditNote;
  private sendEvents: Array<any>;

  private selectedDestinyType: string = "CUSTOMER";
  private destinyType = [
    { denomination: "send-to-customer", value: "CUSTOMER" },
    { denomination: "send-to-third-party", value: "THIRD_PARTY" },
    { denomination: "send-to-custom-third-party-by-email", value: "THIRD_PARTY_BY_EMAIL" }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.parentDataSubscription = this.activatedRoute.parent.data.subscribe(data => {
      this.organization = <Organization>data["organization"];
    });
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.creditNote = <CreditNote>data["creditNote"];
      this.loadData(this.selectedDestinyType);
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  loadData(destinyType: string) {
    let customerQueryParams: URLSearchParams = new URLSearchParams();
    customerQueryParams.set("destinyType", destinyType);
    this.creditNote.getSendEvents(customerQueryParams).subscribe(data => {
      this.sendEvents = data;
    });
  }

  downloadFile(file) {
    this.dataService.storageFiles().download(this.organization, file.id, file.fileName);
  }

}
