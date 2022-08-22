import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public previous = new EventEmitter<void>();


  public formTwo!: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formTwo = this._fb.group({
      endereco: ['', Validators.required],
      cep: ['', Validators.required],
    })
    console.log('Olá, Bem vindo ao formulário 2');
  }


  submit(){
    if(this.formTwo.valid){
      const data = this.formTwo.getRawValue();
      this.next.emit(data);
      console.log('form two' + data);
    }
  }
  back(): void {

    this.previous.emit();
  }
}
