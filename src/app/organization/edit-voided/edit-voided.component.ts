/**
 * Created by lxpary on 03/01/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Voided } from '../../core/models/voided.model';

@Component({
  selector: 'of-edit-voided',
  templateUrl: './edit-voided.component.html',
  styleUrls: ['./edit-voided.component.scss']
})
export class EditVoidedComponent implements OnInit {

  private voided: any;
  private organization: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.voided = this.activatedRoute.snapshot.data['voided'];
  }

  ngOnInit() {
  }

  downloadXml() {
    let voided: Voided = this.dataService.voideds().build(this.organization, this.voided.codigoUnico);
    this.voided.downloadXml(voided);
  }

  downloadPdf() {
    let voided: Voided = this.dataService.voideds().build(this.organization, this.voided.codigoUnico);
    this.voided.downloadPdf(voided);
  }

  sendToCustomer() {
    let voided: Voided = this.dataService.voideds().build(this.organization, this.voided.codigoUnico);
    this.voided.sendToCustomer(voided).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Voided sended to customer.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Voided could not be sended to customer.');
      }
    );
  }

  sendToThirdParty() {
    let voided: Voided = this.dataService.voideds().build(this.organization, this.voided.codigoUnico);
    this.voided.sendToThirdParty(voided).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Voided sended to third party.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Voided could not be sended to third party.');
      }
    );
  }

}
