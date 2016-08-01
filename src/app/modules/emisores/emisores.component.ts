import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmisorService } from '../../../app/services/emisor.service';
import { Emisor } from '../../../app/models/emisor';
import {DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-emisores',
  templateUrl: 'emisores.component.html',
  styleUrls: ['emisores.component.css'],
  providers: [EmisorService],
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]//,Highlight],

})
export class EmisoresComponent implements OnInit {
  emisores: Emisor[];
  selectedEmisor: Emisor[];
  errorMessage: string;
  constructor(private router: Router, private emisorService: EmisorService) { }

  ngOnInit() {
    // this.getEmisoresPromise();
    this.getEmisoresObservable()
  }

  nuevo() {
    let link = ['/emisores/nuevo'];

    this.router.navigate(link);
  }
  // getEmisoresPromise() {
  //   this.emisorService
  //     .getEmisoresPromise()
  //     .then(emisores => this.emisores = emisores,
  //     error => this.errorMessage = <any>error);

  // }
  getEmisoresObservable() {
    this.emisorService.getEmisoresObservable()
      .subscribe(
      emisores => this.emisores = emisores,
      error => this.errorMessage = <any>error);
  }
  editRowEmisor(emisor) {
    let link = ['/emisores/editar', emisor.id];
    this.router.navigate(link);
  }

  deleteRowEmisor(emisorSelect) {
    alert(JSON.stringify(emisorSelect))
  }

  getDetailRowEmisor(emisorSelect) {
    alert(JSON.stringify(emisorSelect))
  }


}
