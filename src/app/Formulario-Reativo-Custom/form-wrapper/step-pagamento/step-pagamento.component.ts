import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-pagamento',
  templateUrl: './step-pagamento.component.html',
  styleUrls: ['./step-pagamento.component.scss']
})
export class StepPagamentoComponent implements OnInit {
  @Output() public step = new EventEmitter<any>();
  @Output() public stepBack = new EventEmitter<void>();
  @Input() public dados: any;


  public formthree!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formthree = this._fb.group({
      aceito: [true]
    })
  }

  submit(){
    if(this.formthree.valid){
      const data = this.formthree.getRawValue();
      this.step.emit(data);
      console.log(data);
    }
  }

  public voltar(): void {
    this.stepBack.emit();
  }

}
