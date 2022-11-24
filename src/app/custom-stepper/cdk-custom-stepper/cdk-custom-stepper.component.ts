import { BehaviorSubject } from 'rxjs';
import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-custom-stepper',
  templateUrl: './cdk-custom-stepper.component.html',
  styleUrls: ['./cdk-custom-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: CdkCustomStepperComponent}],
})
export class CdkCustomStepperComponent extends CdkStepper{


  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }

}
