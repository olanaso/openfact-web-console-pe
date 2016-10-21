import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  private form: FormGroup;
  private working: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService,
    private modalService: NgbModal) {
    this.organization = this.activatedRoute.snapshot.parent.parent.data['organization'];
    this.buildForm();
    this.loadData();
  }

  ngOnInit() {
  }

  buildForm() {
    /*this.form = this.formBuilder.group({
      organization: [undefined, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [undefined, Validators.maxLength(250)],
      enabled: [false, Validators.required],
    });*/
  }

  loadData() {
    /*this.form.patchValue(this.organization);
    this.form.markAsPristine();*/
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

  save() {
    this.working = true;

    this.organization.save().subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.alertService.pop('success', 'Success', 'Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Your changes could not saved to the organization.');
      }
    );
  }

}
