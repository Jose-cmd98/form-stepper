import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-valor',
  templateUrl: './step-valor.component.html',
  styleUrls: ['./step-valor.component.scss']
})
export class StepValorComponent implements OnInit {
  @Output() public step = new EventEmitter<any>();

  public valor = '';
  public valor2 = ''

  constructor() { }

  ngOnInit(): void {
  }

  proximo(): void {
    const valor1 = this.valor;
    const valor2 = this.valor2;
    const dados = {valor1, valor2}
    this.step.emit(dados);
    console.log(dados)
  }

  

}
