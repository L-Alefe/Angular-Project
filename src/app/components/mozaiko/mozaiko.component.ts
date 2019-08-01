import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mozaiko',
  templateUrl: './mozaiko.component.html',
  styleUrls: ['./mozaiko.component.scss']
})
export class MozaikoComponent implements OnInit {
  // public teste: string;
  constructor() { }
  public model: any;
  ngOnInit() { }
  aparecer(evento) {
    console.log(evento)
  }
}
