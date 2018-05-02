import { SearchRoutingModule } from './search-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
