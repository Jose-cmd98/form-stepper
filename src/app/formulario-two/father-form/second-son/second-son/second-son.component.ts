import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-son',
  templateUrl: './second-son.component.html',
  styleUrls: ['./second-son.component.scss']
})
export class SecondSonComponent implements OnInit {
  @Output() public next = new EventEmitter();
  @Output() public previous = new EventEmitter<void>();
  public secondSon!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.secondSon = this._fb.group({
      endereco: [''],
      cep: ['']
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
