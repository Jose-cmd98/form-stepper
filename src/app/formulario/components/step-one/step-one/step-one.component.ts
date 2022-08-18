import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Output() public next = new EventEmitter();

  public formOne!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formOne = this._fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
    })
  }

  submit(){
    if(this.formOne.valid){
      const data = this.formOne.getRawValue();
      this.next.emit(data);
      console.log('form one' + data);
    }
  }

}
