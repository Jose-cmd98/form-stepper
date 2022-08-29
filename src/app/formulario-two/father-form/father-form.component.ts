import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-father-form',
  templateUrl: './father-form.component.html',
  styleUrls: ['./father-form.component.scss']
})
export class FatherFormComponent implements OnInit {
  @ViewChild('stepper') public stepper!: MatStepper;

  public data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('it works by first opening')
  }

  next(data: any){
    this.data = { ...this.data, ...data };
    this.stepper.next();
  }

  sendData(data: any){
    this.next(data);
    console.log(this.data);
  }

}
