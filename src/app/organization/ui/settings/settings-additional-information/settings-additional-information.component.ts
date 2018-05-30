import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';
import { ToastsManager } from 'ng2-toastr';
import { GenericType } from './../../../../core/model/genericType.model';
import { SurenService } from 'app/sunat/suren.service';

@Component({
  selector: 'of-settings-additional-information',
  templateUrl: './settings-additional-information.component.html',
  styles: [`
    form {
      margin-top: 20px;
    }
  `]
})
export class SettingsAdditionalInformationComponent implements OnInit, OnDestroy {

  dataSubscription: Subscription;
  organization: Organization;
  tiposDocumentEntidad: GenericType[];
  countryIdentifications: GenericType[];
  form: FormGroup;

  working = false;
  finding = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private sunat: SurenService,
    private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.buildForm();
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data['organization'];
      this.loadData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      assignedIdentificationId: [undefined, Validators.compose([Validators.required, Validators.maxLength(20)])],
      additionalAccountId: [undefined, Validators.compose([Validators.required, Validators.maxLength(60)])],
      supplierName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      registrationName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      postalAddress: this.formBuilder.group({
        postalAddressId: [undefined, Validators.compose([Validators.required, Validators.maxLength(10)])],
        cityName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        citySubdivisionName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        countryIdentificationCode: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        countrySubentity: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        district: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        streetName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      })
    });
  }

  loadData() {
    this.form.patchValue(this.organization);
    this.dataService.organizationsSunat().getAllTiposDocumentEntidad(this.organization.organization).subscribe(
      response => {
        this.tiposDocumentEntidad = response || [];
      },
      error => {
      });
    this.countryIdentifications = this.dataService.country().getAll();

    this.form.controls.postalAddress.patchValue({
      countryIdentificationCode: "PE"
    });

  }

  save(form: FormGroup) {
    this.working = true;
    this.organization.save(form.value).subscribe(
      result => {
        this.working = false;
        this.form.markAsPristine();
        this.toastr.success('Success! Your changes have been saved to the organization.');
      },
      error => {
        this.working = false;
      }
    );
  }
  searchOnSunatAndReniec() {
    let numeroDocumento = this.form.get('assignedIdentificationId');
    if (numeroDocumento.valid) {
      this.finding = true;
      this.sunat.search(numeroDocumento.value).subscribe(
        (val) => {
          this.finding = false;
          if (val.estado) {
            this.setData(val);
          } else {
            this.setData(val);
            this.toastr.warning(val.error);
          }
        },
        (err) => {
          this.finding = false;
          this.setData({ razonsocial: "", direccion: "", departamento: "", provincia: "", distrito: "" });
          this.toastr.warning('No se pudo encontrar el DNI o RUC');
        });
    } else {
      this.toastr.warning('Ingrese numero de documento para buscar');
    }
  }
  setData(data) {
    this.form.patchValue({ registrationName: data.razonsocial });
    this.form.controls.postalAddress.patchValue({
      countrySubentity: data.departamento,
      cityName: data.provincia,
      district: data.distrito,
      streetName: data.direccion !== '-' ? data.direccion : null
    });
  }

  postalAddress() {
    window.open("http://www.geodir.co/recursos/Ubigeo.html");
  }
}
