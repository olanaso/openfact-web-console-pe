/**
 * Created by lxpary on 15/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-create-retention-upload',
  templateUrl: './create-retention-upload.component.html',
  styleUrls: ['./create-retention-upload.component.scss']
})
export class CreateRetentionUploadComponent implements OnInit {

  organization: Organization;

  uploader: FileUploader;
  hasDropZoneOver: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.organization = this.activatedRoute.snapshot.parent.parent.parent.data['organization'];
    this.uploader = dataService.retentions().getFileUpload(this.organization);
  }

  ngOnInit() {
  }

  public fileOver(event: any): void {
    this.hasDropZoneOver = event;
  }

}
