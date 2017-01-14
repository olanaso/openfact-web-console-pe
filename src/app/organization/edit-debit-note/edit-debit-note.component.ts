import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { DebitNote } from '../../core/models/debit-note.model';

@Component({
  selector: 'of-edit-debit-note',
  templateUrl: './edit-debit-note.component.html',
  styleUrls: ['./edit-debit-note.component.scss']
})
export class EditDebitNoteComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private organization: Organization;
  private debitNote: DebitNote;

  private thirdPartyByEmail: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.debitNote = data["debitNote"];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  reloadDebitNote() {
    this.debitNote.reload().subscribe(data => {
      this.debitNote = data;
    });
  }

  downloadXml() {
    this.debitNote.downloadXml();
  }

  downloadCdr() {
    this.dataService.organizationPeru().downloadDebitNoteCdr(this.organization.organization, this.debitNote.id);
  }

  downloadPdf() {
    let queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set("format", "pdf");
    this.debitNote.downloadReport(queryParams);
  }

  sendToCustomer() {
    this.debitNote.sendToCustomer().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Debit Note sended to customer.');
    });
  }

  sendToThirdParty() {
    this.debitNote.sendToThirdParty().subscribe(data => {
      this.alertService.pop('success', 'Success', 'Success! Debit Note sended to third party.');
    });
  }

  sendToCustomThridPartyByEmail(content: any) {
    this.modalService.open(content).result.then((form: NgForm) => {
      if (form.valid) {
        this.debitNote.sendToThirdPartyByEmail({ email: form.value.thirdPartyByEmail.email }).subscribe(data => {
          this.alertService.pop('success', 'Success', 'Success! Debit Note sended to third party.');
        })
      }
    }, (reason) => {
    });
  }

}
