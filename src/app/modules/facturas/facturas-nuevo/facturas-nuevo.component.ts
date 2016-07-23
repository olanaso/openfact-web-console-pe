import {Component, OnInit, forwardRef, Provider, ViewChild, Input } from '@angular/core';
import {CORE_DIRECTIVES,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ControlGroup,
  FormBuilder,
  Validators,
  NgClass, Control} from '@angular/common';
import {Http, Response} from '@angular/http';
import {FORM_DIRECTIVES} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
//import {DatePicker} from 'ng2-datepicker';

import { FacturaService } from '../../../../app/services/factura.service';
import { FacturaDetalle } from '../../../../app/models/factura-detalle';
import { Factura } from '../../../../app/models/factura';
import { Moneda } from '../../../../app/models/moneda';
// todo: change to ng2-bootstrap
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {AppValidators} from '../validators';
import {ControlGroupHelper} from '../ControlGroupHelper';

@Component({
  moduleId: module.id,
  selector: 'app-facturas-nuevo',
  templateUrl: 'facturas-nuevo.component.html',
  styleUrls: ['facturas-nuevo.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MODAL_DIRECTIVES, ACCORDION_DIRECTIVES, NgClass],
  viewProviders: [BS_VIEW_PROVIDERS],
  providers: [FacturaService]
})
export class FacturasNuevoComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;

  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
  error: any;

  //facturaDetalles: Array<FacturaDetalle>;
  facturaDetalle: FacturaDetalle = new FacturaDetalle();
  userForm: ControlGroup;
  selectFacturaDetalle: FacturaDetalle;
  selectFactura: Factura;
  listMoneda: Moneda[];
  subTotal: number;
  totalIgv: number;
  igv: number;
  total: number;

  constructor(private http: Http, protected router: Router, builder: FormBuilder, private facturaService: FacturaService) {
    this.selectFactura = new Factura();
    this.selectFactura.facturaDetalle = [];
    this.listMoneda = [];
    this.igv = 0.18;
    this.calcularTotales();
  }

  //para calcular los totaels de la factura.
  calcularTotales() {
    this.total = 0;
    this.selectFactura.facturaDetalle.forEach(element => {
      this.total = this.total + element.precioParcial;       
    });
    this.totalIgv = this.total * this.igv;
    this.subTotal = this.total - this.totalIgv;
    console.log(this.total);    
  }

  /*PARA ALMACENAR LA FACTURA EN LA URL O API.*/
  save() {
    this.facturaService
      .save(this.selectFactura)
      .then(selectFactura => {
        this.selectFactura = selectFactura; // saved hero, w/ id if new       
        //this.goBack(selectFactura);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }





  /**
   * getDataMoneda
   */
  public getDataMoneda() {
    this.listMoneda = this.facturaService.getMoneda();
  }

  public showChildModal(): void {
    this.selectFacturaDetalle = new FacturaDetalle();
    this.childModal.show();
  }
  public hideChildModal(): void {
    this.childModal.hide();
  }
  ngOnInit() {
    this.getDataMoneda();
  }


  /*metodos para el popup de registro de detalle de factura.*/
  /**
     * Handle errors
     * @param response
     */
  handleError(response: Response) {
    if (response.status === 422) {
      let errors: Object = response.json();
      console.log(errors);
      for (var field in errors) {
        var fieldErrors: string[] = (<any>errors)[field];
        ControlGroupHelper.setControlErrors(this.userForm, field, fieldErrors);
      }
    }

    console.log(response);
  }
  Editar(facturaDetalle: FacturaDetalle) {
    this.selectFacturaDetalle = facturaDetalle;
    this.childModal.show();
  }
  deleteModel(selectFacturaDetalle: FacturaDetalle) {
    if (confirm('Are you sure you want to delete user ' + selectFacturaDetalle.producto)) {
      let index = this.selectFactura.facturaDetalle.indexOf(selectFacturaDetalle);
      this.selectFactura.facturaDetalle.splice(index, 1);
      this.calcularTotales();
    }
  }

  agregar(selectFacturaDetalle: FacturaDetalle): void {
    if (!selectFacturaDetalle.idFacturaDetalle) {
      selectFacturaDetalle.idFacturaDetalle = this.selectFactura.facturaDetalle.length + 1;
      selectFacturaDetalle.precioParcial = selectFacturaDetalle.precioUnitario * selectFacturaDetalle.cantidad;
      console.log("ANTES DE GRABAR NUEVO..." + JSON.stringify(selectFacturaDetalle));
      this.selectFactura.facturaDetalle.push(selectFacturaDetalle);
    } else {
      console.log("ANTES DE GRABAR EDICION..." + JSON.stringify(selectFacturaDetalle));
      selectFacturaDetalle.precioParcial = selectFacturaDetalle.precioUnitario * selectFacturaDetalle.cantidad;
    }
    this.calcularTotales();
    this.hideChildModal();
  }
}
