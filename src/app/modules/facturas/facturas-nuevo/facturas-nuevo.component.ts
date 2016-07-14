import {Component, OnInit, forwardRef, Provider,ViewChild } from '@angular/core';
import {CORE_DIRECTIVES, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';


import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
//import {DatePicker} from 'ng2-datepicker';

// todo: change to ng2-bootstrap
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-facturas-nuevo',
  templateUrl: 'facturas-nuevo.component.html',
  styleUrls: ['facturas-nuevo.component.css'],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, MODAL_DIRECTIVES, ACCORDION_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class FacturasNuevoComponent implements OnInit {
  // @ViewChild('childModal') public childModal: ModalDirective;
  public oneAtATime: boolean = true;
  public items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];
  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  // public showChildModal(): void {
  //   this.childModal.show();
  // }

  // public hideChildModal(): void {
  //   this.childModal.hide();
  // }

  listDetalleFactura = [
    {
      Cantidad: 1,
      UnidadMedida: "Und",
      Producto: "Cemento Portland Tipo I",
      PrecioUnitario: 12.2,
      precioParcial: 12.2
    },
    {
      Cantidad: 2,
      UnidadMedida: "Und",
      Producto: "Cemento Portland Tipo II",
      PrecioUnitario: 12.2,
      precioParcial: 24.4
    }
  ];
  //test: Test;
  constructor() {
    //this.test = { date: "1/1/2016" };
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.LoadComponentAsync("src/comps/app2/notes/NoteDynamic", 
    //     "TestComponent", this.extensionAnchor);
  }
}