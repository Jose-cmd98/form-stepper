import { StepsEnum } from './step.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @ViewChild('stepper') public stepper!: MatStepper;
  private _currStep$ = new BehaviorSubject<null>(null);

  public data: any = {};

  constructor() { }

  ngOnInit(): void {
    this.currStep = StepsEnum.Step1;
    console.log(this.currStep)
  }


  public updateCurrStep(step: StepsEnum): void{
    this.currStep = step;
  }

  public next(data: any){
    this.data = {...this.data,...data};
    this.stepper.next();
  }
  public previous(): void{
    this.currStep = StepsEnum.Step1;
  }

  // stepper counter
  get currStep(){
    return this._currStep$.getValue();
  }

  get currStep$(){
    return this._currStep$.asObservable();
  }

  set currStep(currStep: any){
    this._currStep$.next(currStep);
  }
}
