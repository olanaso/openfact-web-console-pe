import { Component, OnInit } from '@angular/core';
import { EmisorService } from '../../../app/services/emisor.service';
import { EmisorFactory } from '../../../app/services/emisor-factory';

@Component({
  moduleId: module.id,
  selector: 'app-emisor',
  templateUrl: 'emisor.component.html',
  styleUrls: ['emisor.component.css'],
  providers: [EmisorService],
})
export class EmisorComponent implements OnInit {

  constructor(private emisorFactory: EmisorFactory) { }

  ngOnInit() {
  }

  getEmisores() {
    // this.emisorFactory.searchEmisores()
    //   .suscribe(
    //   facturas => this.facturas = facturas,
    //   error => this.errorMessage = <any>error);

  }



}
