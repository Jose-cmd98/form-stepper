import { StepsEnum } from './step.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
];


@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private _currStep$ = new BehaviorSubject<StepsEnum | null>(null);




  constructor() {}

   get currStep(): StepsEnum | null {
    return this._currStep$.getValue();
  }

  get currStep$(): Observable<StepsEnum | null> {
    return this._currStep$.asObservable();
  }

  set currStep(currStep: any) {
    this._currStep$.next(currStep);
  }

}
