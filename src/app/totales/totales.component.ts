import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';

@Component({
  selector: 'not-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css']
})
export class TotalesComponent implements OnInit {

  public notasTotales: Nota[] = [];

  @Input()
  public set notas(notas: Nota[]) {
    this.notasTotales = notas;
    this.calculaTotales();
  }

  public totales = {
    media: 0,
    maxima: 0,
    nAprobados: 0,
    pAprobados: 0,
    nSuspensos: 0,
    pSuspensos: 0
  };

  constructor() { }

  private calculaTotales(): void {
    const media = this.notasTotales.reduce((acc, nota) => acc + nota.nota, 0) / this.notasTotales.length;
    const maxima = this.notasTotales.reduce((acc, nota) => nota.nota > acc ? nota.nota : acc, 0);
    const nAprobados = this.notasTotales.filter(nota => nota.nota >= 5).length;
    const pAprobados = nAprobados / this.notasTotales.length * 100;
    const nSuspensos = this.notasTotales.length - nAprobados;
    const pSuspensos = 100 - pAprobados;
    this.totales = { media, maxima, nAprobados, pAprobados, nSuspensos, pSuspensos };
  }

  ngOnInit(): void {

  }

}
