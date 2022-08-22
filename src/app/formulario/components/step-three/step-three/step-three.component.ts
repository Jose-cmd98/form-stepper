import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public previous = new EventEmitter<void>();

  public formthree!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formthree = this._fb.group({
      aceito: ['', Validators.required],
    })
  }

  submit(){
    if(this.formthree.valid){
      const data = this.formthree.getRawValue();
      this.next.emit(data);
      console.log('form two' + data);
    }
  }

  back(): void {
    this.previous.emit();
  }
}
