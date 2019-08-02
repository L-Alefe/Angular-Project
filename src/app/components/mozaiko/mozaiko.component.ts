import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mozaiko',
  templateUrl: './mozaiko.component.html',
  styleUrls: ['./mozaiko.component.scss']
})
export class MozaikoComponent implements OnInit {
  // public teste: string;
  public descricao: any;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state) {
      this.descricao = nav.extras.state.descricao;
      // console.log('aqui está a descrição -->');
      // console.log(this.descricao);
    }
  }
  public model: any;
  ngOnInit() { }
  aparecer(evento) {
    // console.log(evento)
  }
}
