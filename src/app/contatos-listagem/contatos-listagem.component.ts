import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.scss']
})
export class ContatosListagemComponent implements OnInit {
  contatos = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatoService.get().subscribe(contato => {
      this.contatos = contato;
    });
  }
}
