import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepTwoComponent } from './step-two/step-two.component';



@NgModule({
  declarations: [
    StepTwoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [StepTwoComponent]
})
export class StepTwoModule { }
