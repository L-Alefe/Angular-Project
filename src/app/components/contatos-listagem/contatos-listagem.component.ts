import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
// import { TreinoHttp } from '../../services/treinoHttp.service';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.scss']
})
export class ContatosListagemComponent implements OnInit {
  contatos = [];
  // valoresTypeahead: Array<string> = [];
  constructor(private contatoService: ContatoService /*private service: TreinoHttp, private config: any*/) { }

  ngOnInit() {
    this.contatoService.get().subscribe(contato => {
      this.contatos = contato;
      console.log(this.contatos)
      for (var i = 0; i < this.contatos.length; i++) {
        // this.valoresTypeahead.push(this.contatos[i].descricao);
      }
    });
  }

  showConfig() {
    /*this.service.getValues().subscribe(
      (data: any) =>
        (this.config = {
          nome: data['nome'],
          idade: data['idade']
        })
    );*/
  }
}
