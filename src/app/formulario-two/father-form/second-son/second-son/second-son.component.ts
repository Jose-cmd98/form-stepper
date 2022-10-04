import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-son',
  templateUrl: './second-son.component.html',
  styleUrls: ['./second-son.component.scss']
})
export class SecondSonComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public previous = new EventEmitter<void>();

  get enderecoControls(): AbstractControl { return this.secondSon.controls['endereco']};
  get cepControls(): AbstractControl { return this.secondSon.controls['cep']}

  public secondSon!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.secondSon = this._fb.group({
      endereco: ['', Validators.required],
      cep: ['', Validators.required]
    })
  }

  public submit() {
    if(this.secondSon.valid){
      const data = this.secondSon.getRawValue();
      this.next.emit(data);
      console.log('form two' + data);
    }
  }

  public back() {
    this.previous.emit();
  }

}
