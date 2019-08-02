import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TreinoHttp {
  constructor(private http: HttpClient) { }
  urlValuesJson = '../JSON/jsonValues.json';
  getValues() {
    return this.http.get('../JSON/jsonValues.json');
  }
}
