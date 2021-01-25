import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbService {
  readonly dados =[  //representação de meses e quantidade de vendas
    ['Janeiro',33],
    ['Fevereiro',68],
    ['Março',49],
    ['Abril',15],
    ['Maio',80],
    ['Junho',27]
  ];
  constructor() { }
  obterDados():Observable<any>{
    return new Observable(observable =>{
      observable.next(this.dados);  //comando para notificar todos os inscritos no observable,ja retorna os dados atualizados
      observable.complete(); //notifica aos escritos que observaçaõ terminou
    });
  }

}
