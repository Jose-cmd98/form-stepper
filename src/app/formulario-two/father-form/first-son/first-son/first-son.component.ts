import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-son',
  templateUrl: './first-son.component.html',
  styleUrls: ['./first-son.component.scss']
})
export class FirstSonComponent implements OnInit {
  @Output() public next = new EventEmitter();

  get nomeControls(): AbstractControl { return this.firstSon.controls['nome']};
  get sobrenomeControls(): AbstractControl { return this.firstSon.controls['sobrenome']};

  public firstSon!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.firstSon = this._fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required]
    })
  }

  submit(){
    // const data = this.firstSon.getRawValue();
    // const processedData = {...data}
    // console.log(`First Son Value: ${processedData}`)
    if(this.firstSon.valid){
      const data = this.firstSon.getRawValue();
      this.next.emit(data);
      console.log('form one' + data);
    }
  }
}
