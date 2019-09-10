import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'potencia' })
export class PotenciaPipe implements PipeTransform {
  transform(numero: any, expoente: any): any {
    return Math.pow(numero, expoente);
  }
}
