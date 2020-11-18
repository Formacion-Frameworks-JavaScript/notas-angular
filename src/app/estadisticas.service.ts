import { Injectable } from '@angular/core';
import { Nota } from './datos/nota-interface';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  public totales = {
    media: 0,
    maxima: 0,
    nAprobados: 0,
    pAprobados: 0,
    nSuspensos: 0,
    pSuspensos: 0
  };

  public calculaTotales(notas: Nota[]): {} {
    const media = notas.reduce((acc, nota) => acc + nota.nota, 0) / notas.length;
    const maxima = notas.reduce((acc, nota) => nota.nota > acc ? nota.nota : acc, 0);
    const nAprobados = notas.filter(nota => nota.nota >= 5).length;
    const pAprobados = nAprobados / notas.length * 100;
    const nSuspensos = notas.length - nAprobados;
    const pSuspensos = 100 - pAprobados;
    this.totales = { media, maxima, nAprobados, pAprobados, nSuspensos, pSuspensos };
    return this.totales;
  }

}
