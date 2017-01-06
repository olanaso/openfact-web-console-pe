import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-create-invoice-upload',
  templateUrl: './create-invoice-upload.component.html',
  styleUrls: ['./create-invoice-upload.component.scss']
})
export class CreateInvoiceUploadComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;

  organization: Organization;

  uploader: FileUploader;
  hasDropZoneOver: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data['organization'];
    });
  }

  ngOnInit() {
    this.uploader = this.dataService.invoices().getFileUpload(this.organization);
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  fileOver(event: any): void {
    this.hasDropZoneOver = event;
  }

}
