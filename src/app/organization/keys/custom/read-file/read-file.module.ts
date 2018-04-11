import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadFileComponent } from './read-file.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReadFileComponent],
  exports: [ReadFileComponent]
})
export class ReadFileModule { }
