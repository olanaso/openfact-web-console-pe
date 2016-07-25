import { Component, EventEmitter, Input, OnInit, OnDestroy, Output  } from '@angular/core';
import { EmisorService } from '../../../../app/services/emisor.service';
import { EmisorFactory } from '../../../../app/services/emisor-factory';
import { Emisor } from '../../../../app/models/emisor';
import { ActivatedRoute, Router } from '@angular/router';
//import {CORE_DIRECTIVES} from '@angular/common';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CORE_DIRECTIVES,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ControlGroup,
  FormBuilder,
  Validators,
  NgClass, Control} from '@angular/common';



@Component({
  moduleId: module.id,
  selector: 'app-emisor-nuevo',
  templateUrl: 'emisor-nuevo.component.html',
  styleUrls: ['emisor-nuevo.component.css'],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MODAL_DIRECTIVES,NgClass],
})
export class EmisorNuevoComponent implements OnInit {
 //@Input() emisor:Emisor;
//  @Output() close = new EventEmitter();
  //error: any;
 // sub: any;
  //navigated = false; // true if navigated here
  constructor( private emisorService: EmisorService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //  this.sub = this.route.params.subscribe(params => {
    //   if (params['id'] !== undefined) {
    //     let id = +params['id'];
    //     this.navigated = true;
    //     this.emisorService.getEmisor(id)
    //         .then(emisor => this.emisor = emisor);
    //   } else {
    //     this.navigated = false;
    //     this.emisor = new Emisor();
    //   }
    // });
  }
  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
  save() {
    // this.emisorService
    //     .save(this.emisor)
    //     .then(emisor => {
    //       this.emisor = emisor; // saved hero, w/ id if new
    //       this.goBack(emisor);
    //     })
    //     .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedEmisor: Emisor = null) {
    // this.close.emit(savedEmisor);
    // if (this.navigated) { window.history.back(); }
  }

}
