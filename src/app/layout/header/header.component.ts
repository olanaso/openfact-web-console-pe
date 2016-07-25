import { Component, OnInit } from '@angular/core';
import { EmisorService } from '../../../app/services/emisor.service';
//import { Emisor } from '../../../app/models/emisor';
import { Organization } from '../../../app/models/organization';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
//import { bootstrap }      from '@angular/platform-browser-dynamic';

@Component({
  moduleId: module.id,
  selector: '[app-header]',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [EmisorService]
})
export class HeaderComponent implements OnInit {
  //listEmisores: Emisor[];
  listOrganization: Organization[];
  constructor(private emisorService: EmisorService, private http: Http) {
    //this.listEmisores = [];
    this.listOrganization=[];
  }

  ngOnInit() {
    this.getEmisores();
  }
  /**
    * getEmisores
    */
  public getEmisores() {
    //this.listEmisores = this.emisorService.getEmisores();
    this.emisorService.getOrganizationsObservable().subscribe(
      listOrganization => this.listOrganization = listOrganization//,
      //error => this.errorMessage = <any>error
    );
  }
}

////bootstrap(HeaderComponent, [HTTP_PROVIDERS]);