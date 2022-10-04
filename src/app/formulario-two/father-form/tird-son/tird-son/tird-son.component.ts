import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tird-son',
  templateUrl: './tird-son.component.html',
  styleUrls: ['./tird-son.component.scss']
})
export class TirdSonComponent implements OnInit {


  public container!: any;

  constructor() { }

  ngOnInit(): void {
    this.container = 1;
  }


  movie(){
    this.container = 1;
  }

  serie() {
    this.container = 2;
  }
}
