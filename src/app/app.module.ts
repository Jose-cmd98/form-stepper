import { TirdSonModule } from './formulario-two/father-form/tird-son/tird-son.module';
import { SecondSonModule } from './formulario-two/father-form/second-son/second-son.module';
import { FirstSonModule } from './formulario-two/father-form/first-son/first-son.module';
import { StepThreeModule } from './formulario/components/step-three/step-three.module';
import { StepTwoModule } from './formulario/components/step-two/step-two.module';
import { StepOneModule } from './formulario/components/step-one/step-one.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { FormularioTwoComponent } from './formulario-two/formulario-two.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FatherFormComponent } from './formulario-two/father-form/father-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioTwoComponent,
    FatherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    StepOneModule,
    StepTwoModule,
    StepThreeModule,
    MatDialogModule,
    // second form
    FirstSonModule,
    SecondSonModule,
    TirdSonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
