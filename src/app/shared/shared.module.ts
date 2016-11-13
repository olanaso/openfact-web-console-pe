import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterCollectionPipe } from './pipes/filter-collection.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';

import { CanActivateAllowedRoles } from './guards/can-activate-allowed-roles';
import { CanActivateAllowedOrganizations } from './guards/can-activate-allowed-organizations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    CapitalizePipe,
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe,
  ],
  exports: [
    FilterCollectionPipe,
    KeysPipe,
    YesNoPipe,
  ],
  providers: [
    CanActivateAllowedRoles,
    CanActivateAllowedOrganizations
  ]
})
export class SharedModule { }
