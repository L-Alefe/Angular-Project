import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm, FormGroup, FormsModule, FormControl } from '@angular/forms';
import { ContatoService } from '../services/contato.service';
import { Produto } from './../models/produto.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.scss']
})
export class InserirProdutoComponent implements OnInit {
  @Output() produto: Produto;

  grupoForm = new FormGroup({
    descricao: new FormControl()
  });

  constructor(private contatoService: ContatoService, private location: Location) {}

  ngOnInit() {
    this.produto = new Produto();
  }

  criar(frm: FormGroup) {
    this.produto = frm.value;
    console.log('this.produto --> ');
    console.log(this.produto);
    this.contatoService.post(this.produto).subscribe(res => {
      console.log('res -->');
      console.log(res);
      console.log('Executou!');
    });
    frm.reset();
  }
}
