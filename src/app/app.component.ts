import { Component, ViewContainerRef } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'of-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Openfact';

  constructor(private toastr: ToastsManager,
              vcr: ViewContainerRef,
              private translate: TranslateService) {
    this.toastr.setRootViewContainerRef(vcr);

    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

}
