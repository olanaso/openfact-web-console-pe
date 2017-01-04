/**
 * Created by lxpary on 15/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

import { Perception } from '../../core/models/perception.model';

@Component({
  selector: 'of-edit-perception',
  templateUrl: './edit-perception.component.html',
  styleUrls: ['./edit-perception.component.scss']
})
export class EditPerceptionComponent implements OnInit {

  private perception: any;
  private organization: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.perception = this.activatedRoute.snapshot.data['perception'];
  }

  ngOnInit() {
  }

  downloadXml() {
    let perception: Perception = this.dataService.perceptions().build(this.organization, this.perception.codigoUnico);
    this.perception.downloadXml(perception);
  }

  downloadPdf() {
    let perception: Perception = this.dataService.perceptions().build(this.organization, this.perception.codigoUnico);
    this.perception.downloadPdf(perception);
  }

  sendToCustomer() {
    let perception: Perception = this.dataService.perceptions().build(this.organization, this.perception.codigoUnico);
    this.perception.sendToCustomer(perception).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Perception sended to customer.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Perception could not be sended to customer.');
      }
    );
  }

  sendToThirdParty() {
    let perception: Perception = this.dataService.perceptions().build(this.organization, this.perception.codigoUnico);
    this.perception.sendToThirdParty(perception).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! Perception sended to third party.');
      },
      error => {
        this.alertService.pop('error', 'Error', 'Perception could not be sended to third party.');
      }
    );
  }

}
