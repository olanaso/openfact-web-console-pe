import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
//import {DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { EmisorService } from '../../../app/services/emisor.service';
import { EmisorFactory } from '../../../app/services/emisor-factory';

@Component({
  moduleId: module.id,
  selector: 'app-emisor',
  templateUrl: 'emisor.component.html',
  styleUrls: ['emisor.component.css'],
  directives: [CORE_DIRECTIVES]
 // providers: [EmisorService],
})
export class EmisorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // getEmisores() {
  //   // this.emisorFactory.searchEmisores()
  //   //   .suscribe(
  //   //   facturas => this.facturas = facturas,
  //   //   error => this.errorMessage = <any>error);

  // }



}
