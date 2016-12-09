import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';
import { Organization } from '../../core/models/organization.model';

@Component({
  selector: 'of-create-invoice-form',
  templateUrl: './create-invoice-form.component.html',
  styleUrls: ['./create-invoice-form.component.scss']
})
export class CreateInvoiceFormComponent implements OnInit {

  form: FormGroup;
  working: boolean = false;

  tipoDocumento = [
    { nombre: 'BOLETA', valor: '01' },
    { nombre: 'FACTURA', valor: '02' }
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      tipo: ['FACTURA'],

      entidadTipoDeDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(12)])],
      entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(120)])],

      serie: [null, Validators.compose([Validators.maxLength(4)])],
      numero: [null, Validators.compose([Validators.maxLength(8)])],
    });
  }

  save(form: any): void {
    this.working = true;
    console.log(form);

    //let organizationCopy = Object.assign(this.organization || {}, form);

    /*this.dataService.organizations().create(organizationCopy).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! The organization has been created.');
        this.router.navigate(['../']);
      },
      error => {
        this.working = false;
        this.alertService.pop('error', 'Error', 'Organization could not be created.');
      }
    );*/
  }

}
