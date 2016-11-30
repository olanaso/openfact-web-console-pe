import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import * as Collections from 'typescript-collections';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-organization-key-providers-settings',
  templateUrl: './organization-key-providers-settings.component.html',
  styleUrls: ['./organization-key-providers-settings.component.scss']
})
export class OrganizationKeyProvidersSettingsComponent implements OnInit {

  organization: Organization;
  serverinfo: any;
  enableUpload: boolean = false;

  providers: any;
  instances: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.serverinfo = this.activatedRoute.snapshot.data['serverinfo'];
    this.providers = this.serverinfo.componentTypes['org.openfact.keys.KeyProvider'];
    this.loadComponents();
  }

  ngOnInit() {
  }

  loadComponents() {
    let queryParams = new URLSearchParams();
    queryParams.set("type", "org.openfact.keys.KeyProvider");
    queryParams.set("parent", this.organization.id);

    this.dataService.organizations().getComponents(this.organization, queryParams).subscribe(
      data => {
        this.instances = data;
      },
      error => {
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

  addProvider(provider) {    
    this.router.navigate(['./', provider], { relativeTo: this.activatedRoute });
  };

  editInstance(instance) {
    this.router.navigate(['./', instance.providerId, instance.id], { relativeTo: this.activatedRoute });
  }

  removeInstance(instance, content) {
    this.modalService.open(content).result.then((result) => {
      this.dataService.organizations().removeComponent(this.organization, instance.id).subscribe(
        data => {
          this.alertService.pop('success', 'Success', 'The provider has been deleted.');
          this.loadComponents();
        },
        error => {
          this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
        }
      );
    }, (reason) => {
    });
  };

}
