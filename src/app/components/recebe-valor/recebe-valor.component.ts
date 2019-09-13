import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubjectService } from '../../services/subject.service';
import { Subscription } from 'rxjs';
import { ContatosListagemComponent } from '../contatos-listagem/contatos-listagem.component';

@Component({
  selector: 'app-recebe-valor',
  templateUrl: './recebe-valor.component.html',
  styleUrls: ['./recebe-valor.component.scss']
})
export class RecebeValorComponent implements OnDestroy {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: SubjectService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages = message.text;
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
