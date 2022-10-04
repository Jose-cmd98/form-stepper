import { FatherFormComponent } from './father-form/father-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-formulario-two',
  templateUrl: './formulario-two.component.html',
  styleUrls: ['./formulario-two.component.scss']
})
export class FormularioTwoComponent implements OnInit {
  closeResult!: string;

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openModal() {
    const modalDialog = this._dialog.open(FatherFormComponent);

    modalDialog.afterClosed().subscribe((result) => {
      console.log(`Dialog teste result: ${result}`);
    })
  }


}
