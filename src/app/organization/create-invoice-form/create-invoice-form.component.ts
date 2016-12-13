import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';

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

  tipoDocumentoEntidad = [
    { nombre: 'DNI', valor: '01' },
    { nombre: 'RUC', valor: '02' }
  ];

  tipoIgv = [
    { nombre: 'Gravado - Operación Onerosa', valor: '1' },
    { nombre: 'Gravado - Retiro por premio', valor: '2' },
    { nombre: 'Gravado - Retiro por donación', valor: '3' },
    { nombre: 'Gravado - Retiro', valor: '4' },
    { nombre: 'Gravado - Retiro por publicidad', valor: '5' },
    { nombre: 'Gravado - Bonificaciones', valor: '6' },
    { nombre: 'Gravado – Retiro por entrega a trabajadores', valor: '7' },
    { nombre: 'Exonerado - Operación Onerosa', valor: '8' },
    { nombre: 'Inafecto - Operación Onerosa', valor: '9' },
    { nombre: 'Inafecto - Retiro por Bonificación', valor: '10' },
    { nombre: 'Inafecto - Retiro', valor: '11' },
    { nombre: 'Inafecto - Retiro por Muestras Médicas', valor: '12' },
    { nombre: 'Inafecto - Retiro por Convenio Colectivo', valor: '13' },
    { nombre: 'Inafecto - Retiro por premio', valor: '14' },
    { nombre: 'Inafecto - Retiro por publicidad', valor: '15' },
    { nombre: 'Exportacion', valor: '16' }
  ];

  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    allowDecimal: true
  });

  percentMask = createNumberMask({
    prefix: '',
    suffix: '',
    allowDecimal: true,
    thousandsSeparatorSymbol: ''
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService,
    private modalService: NgbModal, ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      tipo: ["", Validators.compose([Validators.required])],
      igv: [18.00, Validators.compose([Validators.required, Validators.maxLength(6)])],

      entidad: this.formBuilder.group({
        entidadTipoDeDocumento: ["", Validators.compose([Validators.required, Validators.maxLength(12)])],
        entidadNumeroDeDocumento: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
        entidadDenominacion: [null, Validators.compose([Validators.required, Validators.maxLength(120)])],
        entidadEmail: [null, Validators.compose([Validators.maxLength(120)])],
        entidadDireccion: [null, Validators.compose([Validators.maxLength(150)])],
      }),

      serie: [null, Validators.compose([Validators.maxLength(4)])],
      numero: [null, Validators.compose([Validators.maxLength(8)])],

      fechaDeEmision: [null, Validators.compose([])],
      fechaDeVencimiento: [null, Validators.compose([])],

      moneda: ['PEN', Validators.compose([Validators.required, Validators.maxLength(3)])],
      tipoCambio: [null, Validators.compose([])],
      operacionGratuita: [false, Validators.compose([Validators.required])],

      enviarAutomaticamenteASunat: [true, Validators.compose([Validators.required])],
      enviarAutomaticamenteAlCliente: [true, Validators.compose([Validators.required])],

      lines: this.formBuilder.array([])
    });

    this.addLine();

    this.form.get('igv')
      .valueChanges
      .filter(form => this.form.get('igv').valid)
      .map(igv => Number(igv.replace(/,/g, '')))
      .subscribe(igv => {
        let linesControls = this.form.get('lines')['controls'];
        for (let i = 0; i < linesControls.length; i++) {
          let formGroupLine: FormGroup = linesControls[i];

          let cantidad = formGroupLine.get('cantidad').valid ? Number(formGroupLine.get('cantidad').value.replace(/,/g, '')) : 0;
          let valorUnitario = formGroupLine.get('valorUnitario').valid ? Number(formGroupLine.get('valorUnitario').value.replace(/,/g, '')) : 0;

          let subtotal = cantidad * valorUnitario;
          let total = subtotal * (igv + 1) / 100;

          formGroupLine.patchValue({
            subtotal: subtotal,
            total: total
          });
        }
      });
  }

  get lines(): FormArray {
    return this.form.get('lines') as FormArray;
  }

  addLine() {
    let lineForm = this.formBuilder.group({
      descripcion: [null, Validators.compose([Validators.required, Validators.maxLength(150)])],
      cantidad: [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      tipoDeIgv: ["", Validators.compose([Validators.required, Validators.maxLength(2)])],
      valorUnitario: [null, Validators.compose([Validators.required, Validators.maxLength(10)])],

      subtotal: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      total: [null, Validators.compose([Validators.required, Validators.maxLength(20)])]
    });

    let cantidadFormControl = lineForm.get('cantidad');
    let valorUnitarioFormControl = lineForm.get('valorUnitario');

    cantidadFormControl.valueChanges
      .filter(p => cantidadFormControl.valid)
      .filter(form => this.form.get('igv').valid)
      .subscribe(cantidad => this.buildSubtotalValueChange(lineForm));

    valorUnitarioFormControl.valueChanges
      .filter(p => valorUnitarioFormControl.valid)
      .filter(form => this.form.get('igv').valid)
      .subscribe(valorUnitario => this.buildSubtotalValueChange(lineForm));

    this.lines.push(lineForm);
  }

  buildSubtotalValueChange(formGroup: FormGroup) {
    let igv = this.form.get('igv').valid ? Number(this.form.get('igv').value) : 0;
    let cantidad = formGroup.get('cantidad').valid ? Number(formGroup.get('cantidad').value.replace(/,/g, '')) : 0;
    let valorUnitario = formGroup.get('valorUnitario').valid ? Number(formGroup.get('valorUnitario').value.replace(/,/g, '')) : 0;

    let subtotal = cantidad * valorUnitario;
    let total = subtotal * (igv + 1) / 100;

    formGroup.patchValue({
      subtotal: subtotal,
      total: total
    });
  }

  removeLine(index) {
    this.lines.removeAt(index);
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
