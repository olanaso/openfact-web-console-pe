/**
 * Created by lxpary on 03/01/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';
import { Voided } from '../../core/models/voided.model';

@Component({
  selector: 'of-voided-overview',
  templateUrl: './voided-overview.component.html',
  styleUrls: ['./voided-overview.component.scss']
})
export class VoidedOverviewComponent implements OnInit {

  private voided: Voided;
  private voidedJson: Voided;
  private voidedText: Voided;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService, private alertService: AlertService) {
    this.voided = this.activatedRoute.snapshot.data['voided'];
    this.voidedText = this.activatedRoute.snapshot.data['voidedText'];
    this.voidedJson = this.activatedRoute.snapshot.data['voidedJson'];
  }

  ngOnInit() {
  }

}
