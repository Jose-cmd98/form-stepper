import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondSonComponent } from './second-son/second-son.component';



@NgModule({
  declarations: [
    SecondSonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SecondSonComponent]
})
export class SecondSonModule { }
