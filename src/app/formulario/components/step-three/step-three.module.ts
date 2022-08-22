import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepThreeComponent } from './step-three/step-three.component';



@NgModule({
  declarations: [
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ StepThreeComponent ]
})
export class StepThreeModule { }
