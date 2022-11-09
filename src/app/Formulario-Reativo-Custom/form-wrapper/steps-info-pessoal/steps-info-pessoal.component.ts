import { FormGroup, FormBuilder } from '@angular/forms';
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

  public formulario!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      nome: this._fb.control(''),
      sobrenome: this._fb.control(''),
      endereco: this._fb.control(''),
    })
  }

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
