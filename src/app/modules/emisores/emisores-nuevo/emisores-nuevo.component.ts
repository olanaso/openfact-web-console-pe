import { Component, OnInit } from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import { Emisor } from '../../../../app/models/emisor';


@Component({
  moduleId: module.id,
  selector: 'app-emisores-nuevo',
  templateUrl: 'emisores-nuevo.component.html',
  styleUrls: ['emisores-nuevo.component.css'],
  directives:[FORM_DIRECTIVES]
})
export class EmisoresNuevoComponent implements OnInit {
selectEmisor: Emisor;

  constructor() {
  this.selectEmisor = new Emisor();

  }

  ngOnInit() {
  }

}
