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

    // test step
    public step: any;
    public stepBack: any;


  constructor(
    private stepsService: StepsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stepsService.currStep = StepsEnum.Step1;
    this.step = this.step = 1;

    // setTimeout(() =>{
    //   this.stepper.next();
    //   this.stepper.next();
    // })
  }

  next(data: any){
    this.data = { ...this.data, ...data };
    this.stepper.next();
  }

  sendData(data: any){
    this.next(data);
    console.log(this.data);
  }

  public updateCurrStep(step: StepsEnum): void {
    this.stepsService.currStep = step;
  }


}
