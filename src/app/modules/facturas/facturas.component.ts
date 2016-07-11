import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-facturas',
  templateUrl: 'facturas.component.html',
  styleUrls: ['facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  nuevo() {
    let link = ['/facturas/nuevo'];
    this.router.navigate(link);
  }

  editar() {
    let link = ['/facturas/editar', 2];
    this.router.navigate(link);
  }

}
