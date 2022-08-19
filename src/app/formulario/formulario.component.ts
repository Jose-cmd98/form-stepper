import { StepsService } from './steps.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { StepsEnum } from './step.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @ViewChild('stepper') public stepper!: MatStepper;

  public data: any = {};

  constructor(
    private stepsService: StepsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stepsService.currStep = StepsEnum.Step1;
  }


  public updateCurrStep(step: StepsEnum): void {
    this.stepsService.currStep = step;
  }

  public next(data: any): void {
    this.data = this.data ;
    this.stepper.next();
  }

}
