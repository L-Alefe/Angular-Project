import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ContatoService } from '../../../services/contato.service';



@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  model: any
  contatos: any
  @Output() nameEmitter = new EventEmitter();
  // @Input() testes;
  public valoresTypeahead: Array<any> = []

  incrementa(_value) {
    //this.valor++;
    this.nameEmitter.emit({ novoValor: _value });
  }


  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    // console.log(this.testes);
    this.contatoService.get().subscribe(contato => {
      this.contatos = contato;
      for (var i = 0; i < this.contatos.length; i++) {
        this.valoresTypeahead.push(this.contatos[i].descricao);
      }
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.valoresTypeahead.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
