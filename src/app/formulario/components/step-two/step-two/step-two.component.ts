import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public previous = new EventEmitter<void>();

  get complementoControls(): AbstractControl { return this.formTwo.controls['complemento']}
  get complemento() { return this.formTwo.get('complemento') as FormArray};

  public formTwo!: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formTwo = this._fb.group({
      endereco: ['', Validators.required],
      cep: ['', Validators.required],
        complemento: this._fb.array([
          this._fb.control('')
        ])
    })
    console.log('Olá, Bem vindo ao formulário 2');
  }

  addField(){
    this.complemento.push(this._fb.control(''));
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
