import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkCustomStepperComponent } from './cdk-custom-stepper/cdk-custom-stepper.component';

import {CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    CdkCustomStepperComponent
  ],
  imports: [
    CommonModule,
    CdkStepperModule
  ],
  exports: [CdkCustomStepperComponent]
})
export class CustomStepperModule { }
