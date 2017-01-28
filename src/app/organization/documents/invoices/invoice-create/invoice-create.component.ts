import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AlertService } from './../../../../core/alert/alert.service';
import { DataService } from './../../../../core/data/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from './../../../../core/model/organization.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'of-invoice-create',
  templateUrl: './invoice-create.component.html',
  styles: []
})
export class InvoiceCreateComponent implements OnInit, OnDestroy {

  parentDataSubscription: Subscription;
  dataSubscription: Subscription;

  form: FormGroup;
  working: boolean = false;

  organization: Organization;
  tiposComprobantePago: any[];
  tiposDocumentEntidad: any[];
  tiposAfectacionIGV: any[];

  numberMask = { allowDecimal: true, decimalLimit: 2 };
  quantityMask = { allowDecimal: true, decimalLimit: 3 };
  percentMask = { allowDecimal: true, decimalLimit: 2, prefix: '% ' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private dataService: DataService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.parentDataSubscription = this.route.data.subscribe((data) => {
      this.organization = data['organization'];
    });
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.tiposComprobantePago = data['tiposComprobantePago'];
      this.tiposDocumentEntidad = data['tiposDocumentEntidad'];
      this.tiposAfectacionIGV = data['tiposAfectacionIGV'];
    });
  }

  ngOnDestroy() {
    this.parentDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
