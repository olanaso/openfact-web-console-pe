import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-create-credit-note-upload',
  templateUrl: './create-credit-note-upload.component.html',
  styleUrls: ['./create-credit-note-upload.component.scss']
})
export class CreateCreditNoteUploadComponent implements OnInit {

  organization: Organization;

  uploader: FileUploader;
  hasDropZoneOver: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.parent.data['organization'];
    this.uploader = dataService.creditnotes().getFileUpload(this.organization);
  }

  ngOnInit() {
  }

  public fileOver(event: any): void {
    this.hasDropZoneOver = event;    
  }

}
