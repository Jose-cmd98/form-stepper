import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public proximo = new EventEmitter();

  get nomeControls(): AbstractControl { return this.formOne.controls['nome']}
  get sobreNomeControls(): AbstractControl { return this.formOne.controls['sobrenome']}

  public formOne!: FormGroup;
  public step: any = 2;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formOne = this._fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
    });
    console.log('Olá, Bem vindo ao formulário 1');
  }

  submit(){
    if(this.formOne.valid){
      const data = this.formOne.getRawValue();
      this.next.emit(data);
      this.proximo.emit(this.step)
      console.log('form one' + data);
    }
  }

}
