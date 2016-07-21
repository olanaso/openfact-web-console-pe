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
  public oneAtATime: boolean = true;
  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
  error: any;
  sub: any;

  isON: boolean = true;
  isOFF: boolean = true;

  facturaDetalles: Array<FacturaDetalle>;
  facturaDetalle: FacturaDetalle = new FacturaDetalle();
  userForm: ControlGroup;
  selectFacturaDetalle: FacturaDetalle;
  selectFactura: Factura;
  listMoneda: Moneda[];

  constructor(private http: Http, protected router: Router, builder: FormBuilder, private facturaService: FacturaService) {
    //this.http.get('/users')
    //.map(res => res.json())
    //.subscribe(
    //   .(facturaDetalle) => {
    //     facturaDetalle.forEach(userData => {
    //       var facturaDetalle: FacturaDetalle = new FacturaDetalle(userData);
    //       this.facturaDetalles.push(facturaDetalle);
    //     });
    //   console.log(this.facturaDetalles);
    // }
    //);
    this.facturaDetalles = [];
    this.selectFactura = new Factura();
    this.listMoneda = [];
    // this.userForm = builder.group({
    //   cantidad: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    //   unidadMedida: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    //   producto: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    //   precioUnitario: ['', Validators.compose([Validators.minLength(2)])]
    // });
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

  Editar(facturaDetalle: FacturaDetalle) {
    this.selectFacturaDetalle = facturaDetalle;
    this.childModal.show();
  }

  // deleteModel(facturaDetalle: FacturaDetalle) {
  //   if (confirm('Are you sure you want to delete user ' + facturaDetalle.producto)) {
  //     this.http.delete('/users/' + facturaDetalle.idFacturaDetalle)
  //       .subscribe(
  //       (response) => {
  //         if (response.status === 204) {
  //           this.facturaDetalles.forEach((u: FacturaDetalle, i) => {
  //             if (u.idFacturaDetalle === facturaDetalle.idFacturaDetalle) {
  //               this.facturaDetalles.splice(i, 1);
  //             }
  //           });
  //           console.log(this.facturaDetalles);
  //         }
  //       }
  //       );
  //   }
  // }

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

  deleteModel(selectFacturaDetalle: FacturaDetalle) {
    if (confirm('Are you sure you want to delete user ' + selectFacturaDetalle.producto)) {
      let index = this.facturaDetalles.indexOf(selectFacturaDetalle);
      this.facturaDetalles.splice(index, 1);
    }
  }

  agregar(selectFacturaDetalle: FacturaDetalle): void {
    if (!selectFacturaDetalle.idFacturaDetalle) {
      selectFacturaDetalle.idFacturaDetalle = this.facturaDetalles.length + 1;
      selectFacturaDetalle.precioParcial = selectFacturaDetalle.precioUnitario * selectFacturaDetalle.cantidad;
      console.log("ANTES DE GRABAR NUEVO..." + JSON.stringify(selectFacturaDetalle));
      this.facturaDetalles.push(selectFacturaDetalle);
    } else {
      console.log("ANTES DE GRABAR EDICION..." + JSON.stringify(selectFacturaDetalle));
      selectFacturaDetalle.precioParcial = selectFacturaDetalle.precioUnitario * selectFacturaDetalle.cantidad;
    }
    this.hideChildModal();
    //this.facturaDetalles.push(selectFacturaDetalle);
    // this.facturaService
    //   .addItem(this.selectFacturaDetalle);
    // .then(selectFacturaDetalle => {
    //   this.selectFacturaDetalle = selectFacturaDetalle; // saved hero, w/ id if new
    //   //this.goBack(selectFacturaDetalle);
    //   //this.ngOnInit();
    //   this.childModal.hide();
    // })
    //.catch(error => this.error = error); // TODO: Display error message

    // console.log(this.userForm);
    // // if (!this.userForm.valid) {
    // //   return;
    // // }
    // //this.facturaDetalle.attributes = this.userForm.value;
    // console.log(this.facturaDetalle);
    // if (this.facturaDetalle.idFacturaDetalle) {
    //   this.http.put('/users/' + this.facturaDetalle.idFacturaDetalle, JSON.stringify({ facturaDetalle: this.facturaDetalle }))
    //     .map(res => res.json())
    //     .subscribe(
    //     (data) => {
    //       this.router.navigate(['UserList']);
    //     },
    //     (response: Response) => {
    //       this.handleError(response);
    //     }
    //     );
    // } else {
    //   this.http.post('/users', JSON.stringify({ facturaDetalle: this.facturaDetalle }))
    //     .map(res => res.json())
    //     .subscribe(
    //     (data) => {
    //       this.facturaDetalle.idFacturaDetalle = data.idFacturaDetalle;
    //       this.router.navigate(['UserList']);
    //     },
    //     (response: Response) => {
    //       this.handleError(response);
    //     }
    //     );
    // }
  }

}
