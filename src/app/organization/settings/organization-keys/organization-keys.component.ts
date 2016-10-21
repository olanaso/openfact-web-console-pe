import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Organization } from '../../../shared';
import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-organization-keys',
  templateUrl: './organization-keys.component.html',
  styleUrls: ['./organization-keys.component.scss']
})
export class OrganizationKeysComponent implements OnInit {

  private organization: Organization;

  private working: boolean = false;

  private privateKeyUploadName: string;
  private privateKeyUploadContent: any;

  private publicKeyUploadName: string;
  private publicKeyUploadContent: any;

  private certificateUploadName: string;
  private certificateUploadContent: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private alertService: AlertService,
    private modalService: NgbModal) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
  }

  ngOnInit() {
  }

  privateKeyUpload(file: any): void {
    this.privateKeyUploadName = file.fileName;
    this.privateKeyUploadContent = file.data;
  }

  publicKeyUpload(file: any): void {
    this.publicKeyUploadName = file.fileName;
    this.publicKeyUploadContent = file.data;
  }

  certificateUpload(file: any): void {
    this.certificateUploadName = file.fileName;
    this.certificateUploadContent = file.data;
  }

  clearImport() {
    location.reload();
  }

  generateKeys(content) {
    this.modalService.open(content).result.then((result) => {
      this.organization.save({ organization: this.organization.organization, publicKey: 'GENERATE' }).subscribe(
        result => {
          location.reload();
          this.alertService.pop('success', 'Success', 'New keys generated for organization.');
        },
        error => {
          this.working = false;
          this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
        }
      );
    }, (reason) => {
    });
  }

  import(content) {
    this.modalService.open(content).result.then((result) => {
      let upload: any = {
        organization: this.organization.organization
      };

      if (this.privateKeyUploadContent && this.publicKeyUploadContent) {
        upload.privateKey = this.privateKeyUploadContent;
        upload.publicKey = this.publicKeyUploadContent;
      }

      if (this.certificateUploadContent) {
        upload.certificate = this.certificateUploadContent;
      }

      this.working = true;
      this.organization.save(upload).subscribe(
        result => {
          this.working = false;
          this.alertService.pop('success', 'Success', 'Keys imported for organization.');
        },
        error => {
          this.working = false;
          this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
        }
      );
    }, (reason) => {
    });
  };

}
