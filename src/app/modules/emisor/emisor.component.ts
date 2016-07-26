import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import { Emisor } from '../../../app/models/emisor';
//import { EmisorNuevoComponent } from './emisor-nuevo';

//import { Highlight } from '../../../app/directives/my-highlight.directive';
//import { HeroDetailComponent } from './hero-detail.component';
import {DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { EmisorService } from '../../../app/services/emisor.service';
import { EmisorFactory } from '../../../app/services/emisor-factory';

@Component({
  moduleId: module.id,
  selector: 'app-emisor',
  templateUrl: 'emisor.component.html',
  styleUrls: ['emisor.component.css'],
  providers: [ EmisorService,EmisorFactory],
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES]//,Highlight],
})
export class EmisorComponent implements OnInit {

  selectedEmisor: Emisor;
  addingEmisor = false;
  error: any;
  /*para http-------------------*/
  errorMessage: string;
  emisores: Emisor[];
  // emisoresP: Emisor[];
  //  emisoresO: Emisor[];
  mode = 'Normal Function -  Promise y Observable';
  /*--------------------------- */
  constructor(
    private router: Router,
    private emisorFactory: EmisorFactory,
    private emisorService: EmisorService
  )

  { }

  ngOnInit() {
    //  this.getEmisores();
    //  this.getEmisoresObservable();
   this.getEmisoresPromise();
  }

  // getEmisores() {
  //   this.emisorFactory
  //     .getEmisores()
  //     .then(emisores => this.emisores = emisores);

  // }
  getEmisoresPromise() {
    this.emisorService
      .getEmisoresPromise()
      .then(emisores => this.emisores = emisores,
      error => this.errorMessage = <any>error);

  }
  // getEmisoresObservable() {
  //   this.emisorService
  //     .getEmisoresObservable()
  //     .subscribe(emisoresO => this.emisores = emisoresO,
  //     error => this.errorMessage = <any>error);

  // }

  // addEmisorPromise(name: string) {
  //   if (!name) { return; }
  //   this.emisorService.addEmisorPromise(name)
  //     .then(
  //     emisor => this.emisores.push(emisor),
  //     error => this.errorMessage = <any>error);
  // }
  // addEmisorObservable(name: string) {
  //   if (!name) { return; }
  //   this.emisorService.addEmisorObservable(name)
  //     .subscribe(
  //     emisor => this.emisores.push(emisor),
  //     error => this.errorMessage = <any>error);
  // }
  addEmisor() {
    this.addingEmisor = true;
    this.selectedEmisor = null;
  }
  // close(savedEmisor: Emisor) {
  //   this.addingEmisor = false;
  //   if (savedEmisor) { this.getEmisoresPromise(); }
  // }

  onSelect(emisor: Emisor) {
    this.selectedEmisor = emisor;
    this.addingEmisor = false;
  }
  // gotoDetail() {
  //   this.router.navigate(['/detail', this.selectedEmisor.id]);
  // }

  nuevo() {
    let link = ['/emisor/nuevo'];
    //this.clickMessage = 'You are my hero!';
    
    //("Holaaaa...." + link);
    this.router.navigate(link);
  }


}
