import { BehaviorSubject } from 'rxjs';
import { StepsEnum } from './../../formulario/step.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  public dados: any; // recebe os dados dos componentes filho

  public readonly STEPS = StepsEnum; // retorna o valor tipado dos steps

  // observable de steps
  private _stepAtual$ = new BehaviorSubject(StepsEnum.Step1); // fica observando o step atual


  get stepAtual(): StepsEnum { return this._stepAtual$.getValue() }; //busca o valor do step atual

  set stepAtual(step: StepsEnum) { this._stepAtual$.next(step) }; //altera o valor do step atual dinamicamente

  constructor() { }

  ngOnInit(): void {
  }

  //recebe os dados dos components filhos e os guarda na varial dados | altera o step atual
  public receberDados(dados: any): void{
    this.stepAtual = this.stepAtual +1;
    this.dados = { ...this.dados, ...dados };
  }

  //volta ao step anterior
  public voltar(): void{
    this.stepAtual = this.stepAtual -1;
  }



  //finaliza o formulario agrupando todos os dados
  sendData(dados: any){
    this.receberDados(dados);
    console.log(this.dados);
  }
}
