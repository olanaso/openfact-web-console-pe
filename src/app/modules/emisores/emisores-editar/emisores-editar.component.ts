import { Component, OnInit } from '@angular/core';
import { Emisor } from '../../../../app/models/emisor';
import { EmisorService } from '../../../../app/services/emisor.service';
import {FORM_DIRECTIVES} from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-emisores-editar',
  templateUrl: 'emisores-editar.component.html',
  styleUrls: ['emisores-editar.component.css'],
  directives: [FORM_DIRECTIVES],
  providers: [EmisorService]
})
export class EmisoresEditarComponent implements OnInit {
  selectEmisor: Emisor;
  private sub: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emisorService: EmisorService) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.emisorService.getEmisor(id)
        .then(selectEmisor => this.selectEmisor = selectEmisor);
    });
  }
  cancelar() {
    window.history.back();
  }

}
