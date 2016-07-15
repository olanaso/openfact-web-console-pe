import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import { Emisor } from '../../../app/services/emisor';
//import { HeroDetailComponent } from './hero-detail.component';
//import {DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { EmisorService } from '../../../app/services/emisor.service';
import { EmisorFactory } from '../../../app/services/emisor-factory';

@Component({
  moduleId: module.id,
  selector: 'app-emisor',
  templateUrl: 'emisor.component.html',
  styleUrls: ['emisor.component.css'],
  directives: [CORE_DIRECTIVES],
  providers: [EmisorService,EmisorFactory],
})
export class EmisorComponent implements OnInit {
  emisor: Emisor[];
  constructor(private router: Router,private emisorFactory:EmisorFactory) { }

  ngOnInit() {
    this.getEmisores();
  }

  getEmisores() {
    //this.emisor = this.emisorFactory.getEmisores();

    this.emisorFactory.getHeroesSlowly().then(emisor => this.emisor = emisor);
    
  }



}
