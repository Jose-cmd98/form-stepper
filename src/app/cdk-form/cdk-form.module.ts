import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkFormRoutingModule } from './cdk-form-routing.module';
import { FormularioCdkComponent } from './formulario-cdk/formulario-cdk.component';
import { CustomStepperModule } from '../custom-stepper/custom-stepper.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FirstSonModule } from '../formulario-two/father-form/first-son/first-son.module';
import { SecondSonModule } from '../formulario-two/father-form/second-son/second-son.module';
import { TirdSonModule } from '../formulario-two/father-form/tird-son/tird-son.module';


@NgModule({
  declarations: [
    FormularioCdkComponent
  ],
  imports: [
    CommonModule,
    CdkFormRoutingModule,
    CustomStepperModule,
    CdkStepperModule,
    FirstSonModule,
    SecondSonModule,
    TirdSonModule
  ]
})
export class CdkFormModule { }
