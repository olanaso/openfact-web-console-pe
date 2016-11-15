import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Organization } from '../../services/models/organization';
import { DataService } from '../../services/data/data.service';
import { AlertService } from '../../components/alerts/alert.service';

@Component({
  selector: 'app-create-invoice-upload',
  templateUrl: './create-invoice-upload.component.html',
  styleUrls: ['./create-invoice-upload.component.scss']
})
export class CreateInvoiceUploadComponent implements OnInit {

  organization: Organization;

  uploader: FileUploader;
  hasDropZoneOver: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.parent.data['organization'];
    this.uploader = dataService.invoices().getFileUpload(this.organization);
  }

  ngOnInit() {
  }

  public fileOver(event: any): void {
    this.hasDropZoneOver = event;
  }

}
