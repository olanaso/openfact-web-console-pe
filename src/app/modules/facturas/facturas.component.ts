import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { FacturaService } from '../../../app/services/facturas.service';
import { Factura } from '../../../app/services/facturas';


@Component({
  moduleId: module.id,
  selector: 'app-facturas',
  templateUrl: 'facturas.component.html',
  styleUrls: ['facturas.component.css'],
  providers: [FacturaService],
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]

})
// export class FacturasComponent implements OnInit {

// clickMessage ='';
//   constructor(private router: Router) {}
//   directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]
// })

export class FacturasComponent implements OnInit {



  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public items: Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
    title = 'Tour of Heroes';
  facturas: Factura[];
  selectedFactura: Factura;
  constructor(private router: Router, private facturaService: FacturaService) {
  
  }

  getFacturas() {
    this.facturaService.getFacturas().then(facturas => this.facturas = facturas);
  }
  ngOnInit() {
    this.getFacturas();
  }

  nuevo() {
    let link = ['/facturas/nuevo'];
    //this.clickMessage = 'You are my hero!';
    //alert("Holaaaa...." + link);
    this.router.navigate(link);
  }

  editar() {
    let link = ['/facturas/editar', 2];
    this.router.navigate(link);
  }
  enviar() {
    let link = ['/facturas/enviar'];
    this.router.navigate(link);
  }
  importar() {
    let link = ['/facturas/importar'];
    this.router.navigate(link);
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
