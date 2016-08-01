import { Component, OnInit } from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import { Emisor } from '../../../../app/models/emisor';
import { EmisorService } from '../../../../app/services/emisor.service';


@Component({
  moduleId: module.id,
  selector: 'app-emisores-nuevo',
  templateUrl: 'emisores-nuevo.component.html',
  styleUrls: ['emisores-nuevo.component.css'],
  directives: [FORM_DIRECTIVES],
  providers: [EmisorService]
})
export class EmisoresNuevoComponent implements OnInit {
  selectEmisor: Emisor;
  error: any;
  errorMessage: string;
  constructor(private emisorService: EmisorService) {
    this.selectEmisor = new Emisor();

  }

  ngOnInit() {
  }

  /*PARA ALMACENAR LA FACTURA EN LA URL O API.*/
  save() {
    this.emisorService
      .save(this.selectEmisor)
      .subscribe(
      selectEmisor => {
      this.selectEmisor = selectEmisor; // saved emisor, w/ id if new       
              },
      error => this.errorMessage = <any>error);
    
  }
  cancelar() {
    window.history.back();
  }



}
