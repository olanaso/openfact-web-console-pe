import { PECompanyService } from './companies/pe-company.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxBaseModule } from '../ngx-base/ngx-base.module';
import { NxgLoginModule } from './../ngx-login-client/ngx-login.module';

import { CompanyNamePipe } from './companies/company-name.pipe';
import { CompanyService } from './companies/company.service';

import { UBLDocumentService } from './documents/ubl-document.service';

import { Contexts } from './contexts/contexts';
import { ContextService } from './context.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxBaseModule,
    NxgLoginModule
  ],
  declarations: [
    CompanyNamePipe,
  ],
  exports: [
    CompanyNamePipe,
  ],
  providers: []
})
export class NgxOpenfactModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxOpenfactModule,
      providers: [
        CompanyService,
        UBLDocumentService,
        ContextService,
        {
          provide: Contexts,
          useExisting: ContextService
        },
        PECompanyService
      ]
    };
  }

}
