import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { EstadisticasService } from '../estadisticas.service';

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
    this.totales = this.estadisticasService.calculaTotales(notas);
  }

  public totales;

  constructor(private estadisticasService: EstadisticasService) { }

  ngOnInit(): void {

  }

}
