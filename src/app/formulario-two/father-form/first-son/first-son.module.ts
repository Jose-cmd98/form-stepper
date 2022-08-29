import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSonComponent } from './first-son/first-son.component';



@NgModule({
  declarations: [
    FirstSonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FirstSonComponent]
})
export class FirstSonModule { }
