import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsRoutingModule } from './organizations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrganizationsRoutingModule
  ],
  declarations: [OrganizationsComponent]
})
export class OrganizationsModule { }
