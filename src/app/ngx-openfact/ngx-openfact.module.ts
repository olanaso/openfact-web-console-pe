import { ServerInfoService } from './serverinfo/server-info';
import { PECompanyService } from './organizations/pe-company.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxBaseModule } from '../ngx-base/ngx-base.module';
import { NxgLoginModule } from './../ngx-login-client/ngx-login.module';

import { OrganizationService } from './organizations/organization.service';

import { UBLDocumentService } from './documents/ubl-document.service';

import { Contexts } from './contexts/contexts';
import { ContextService } from './context.service';

import { PEUBLDocumentService } from './pe-sunat/pe-ubl-document.service';
import { PESUNATService } from './pe-sunat/pe-sunat';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxBaseModule,
    NxgLoginModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: []
})
export class NgxOpenfactModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxOpenfactModule,
      providers: [
        OrganizationService,
        UBLDocumentService,
        ContextService,
        {
          provide: Contexts,
          useExisting: ContextService
        },
        ServerInfoService,
        PECompanyService,
        PESUNATService,
        PEUBLDocumentService
      ]
    };
  }

}
