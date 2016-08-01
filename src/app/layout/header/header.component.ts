import { Component, OnInit } from '@angular/core';
import { EmisorService } from '../../../app/services/emisor.service';
import { Organization } from '../../../app/models/organization';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {SELECT_DIRECTIVES} from 'ng2-select';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: '[app-header]',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [EmisorService],
  directives: [SELECT_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
  //listEmisores: Emisor[];
  listOrganization: Organization[];
  constructor(private emisorService: EmisorService, private http: Http) {
    //this.listEmisores = [];
    this.listOrganization = [];
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
    console.log("Antes de entrar a la lista"+JSON.stringify(this.listOrganization));
    this.listOrganization.forEach(element => {
      this.items.push(element.name);
    });
    console.log(JSON.stringify(this.items));
  }

  private value: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;
  private items: Array<string>;
  // ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  //   'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  //   'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  //   'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  //   'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  //   'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  //   'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  //   'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  //   'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  //   'Zagreb', 'Zaragoza', 'Łódź'];

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  private selected(value: any) {
    console.log('Selected value is: ', value);
  }

  private removed(value: any) {
    console.log('Removed value is: ', value);
  }

  private typed(value: any) {
    console.log('New search input: ', value);
  }

  private refreshValue(value: any) {
    this.value = value;
  }

}

////bootstrap(HeaderComponent, [HTTP_PROVIDERS]);