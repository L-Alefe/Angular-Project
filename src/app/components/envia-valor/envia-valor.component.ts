import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-envia-valor',
  templateUrl: './envia-valor.component.html',
  styleUrls: ['./envia-valor.component.scss']
})
export class EnviaValorComponent implements OnInit {
  constructor(private messageService: SubjectService) {}

  profileForm = new FormGroup({
    mensagem: new FormControl('')
  });

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(this.profileForm.value.mensagem);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
