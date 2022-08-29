import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TirdSonComponent } from './tird-son/tird-son.component';



@NgModule({
  declarations: [
    TirdSonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TirdSonComponent]
})
export class TirdSonModule { }
