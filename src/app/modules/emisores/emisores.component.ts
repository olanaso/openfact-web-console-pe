import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmisorService } from '../../../app/services/emisor.service';
import { Emisor } from '../../../app/models/emisor';

@Component({
  moduleId: module.id,
  selector: 'app-emisores',
  templateUrl: 'emisores.component.html',
  styleUrls: ['emisores.component.css'],
  providers: [ EmisorService]


})
export class EmisoresComponent implements OnInit {
  emisores: Emisor[];
  errorMessage: string;
  constructor(private router: Router, private emisorService: EmisorService) { }

  ngOnInit() {
   // this.getEmisoresPromise();
   this.getEmisoresObservable()
  }

  nuevo() {
    let link = ['/emisores/nuevo'];
    //this.clickMessage = 'You are my hero!';
    //("Holaaaa...." + link);
    this.router.navigate(link);
  }
  // getEmisoresPromise() {
  //   this.emisorService
  //     .getEmisoresPromise()
  //     .then(emisores => this.emisores = emisores,
  //     error => this.errorMessage = <any>error);

  // }
  getEmisoresObservable() {
    this.emisorService
      .getEmisoresObservable()
      .subscribe(emisores => this.emisores = emisores,
      error => this.errorMessage = <any>error);

  }
   

}
