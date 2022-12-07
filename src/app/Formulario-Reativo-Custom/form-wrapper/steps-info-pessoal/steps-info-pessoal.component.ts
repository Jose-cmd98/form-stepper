import { Validacoes } from './../validacoes';
import { FormGroup, FormBuilder, FormArray, Form, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-steps-info-pessoal',
  templateUrl: './steps-info-pessoal.component.html',
  styleUrls: ['./steps-info-pessoal.component.scss']
})
export class StepsInfoPessoalComponent implements OnInit {
  @Output() public step = new EventEmitter<any>();
  @Output() public stepBack = new EventEmitter<void>();
  @Input() public dados!: any;


  get cpfControl(): AbstractControl { return this.formulario.controls['cpf']}

  public formulario!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  get pessoaAdicionalControl(): FormArray { return this.formulario.controls['pessoaAdicional'] as FormArray};

  ngOnInit(): void {
    this.formulario = this._fb.group({
      cpf: ['', Validators.compose([Validators.required, Validacoes.ValidaCpf])],
      rua: this._fb.control(''),
      cep: this._fb.control(''),
      bairro: this._fb.control(''),
      pessoaAdicional: this._fb.array([
        this._fb.control('')
      ]), //array de adicional
    })
  }
  addField(){
    this.pessoaAdicionalControl.push(this._fb.control(''));
  }
  removeField(index: any){
    this.pessoaAdicionalControl.removeAt(index)
  }

  // public texte(): void {
  //   const data = this.formulario.getRawValue();
  //   data.complemento = data.complemento
  // }

  public proximo(): void {
    const dados: any = {dados: this.formulario.getRawValue()}
    const dadosTeste = this.formulario.getRawValue()
    this.step.emit(dadosTeste);
    console.log(dados)
    console.log(dadosTeste)
  }

  public voltar(): void {
    this.stepBack.emit();
  }

}
