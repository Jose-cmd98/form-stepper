import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';

@Component({
  selector: 'app-formulario-cdk',
  templateUrl: './formulario-cdk.component.html',
  styleUrls: ['./formulario-cdk.component.scss']
})
export class FormularioCdkComponent implements OnInit {

  formsOne!: FormGroup;
  formsTwo!: FormGroup;
  formsTree!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formsOne = this.fb.group({
      nome: [],
    });
    this.formsTwo = this.fb.group({
      sobrenome: []
    });
    this.formsTree = this.fb.group({
      idade: []
    })
  }

  submit(){
    const formValue = this.formsOne.value;
    const formValue2 = this.formsTwo.value;
    const formValue3 = this.formsTree.value;
    const forms = {...formValue, ...formValue2, ...formValue3}
    console.log(forms);
  }

}
