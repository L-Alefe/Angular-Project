import { Injectable, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  produtoUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(this.produtoUrl);
  }

  post(produto: any) {
    console.log('produto no serviço --> ');
    console.log(produto);
    return this.http.post(this.produtoUrl, produto);
  }
}
