import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContatoService } from '../../../services/contato.service';

@Component({
  selector: 'app-lookup-table',
  templateUrl: './lookup-table.component.html',
  styleUrls: ['./lookup-table.component.scss']
})
export class LookupTableComponent implements OnInit {
  public nomes: Array<any>
  public nameEmitter = new EventEmitter()
  contatos = [];
  valoresTypeahead: Array<string> = [];
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.get().subscribe(contato => {
      this.contatos = contato;
      for (var i = 0; i < this.contatos.length; i++) {
        this.valoresTypeahead.push(this.contatos[i].descricao);
      }
    });
  }

  addItem(e: any) {
    var count = 0;
    document.querySelectorAll('.testelm').forEach((e: any) => {
      var inputCheck = e.firstChild.firstChild.firstChild.checked;
      if (inputCheck) {
        this.nomes = e.children[2].innerText
        count++
      }
    });
    if (count != 1 && count != 0) {
      this.nomes = []
      alert('Escolha apenas um registro.')
    } else if (count == 0) {
      alert('Adicione pelo menos um registro.')
    } else if (count == 1) {
      count = 0;
      // Mágica
      console.log(this.nomes)
      this.nameEmitter.emit(this.nomes)
    }
  }

}
