import { Component, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { EstadisticasService } from '../estadisticas.service';
import { NotasService } from '../notas.service';

@Component({
  selector: 'not-pagina-estadisticas',
  templateUrl: './pagina-estadisticas.component.html',
  styleUrls: ['./pagina-estadisticas.component.css']
})
export class PaginaEstadisticasComponent implements OnInit {

  public notas: Nota[];

  public totales;

  constructor(private notasService: NotasService, private estadisticasService: EstadisticasService) { }

  ngOnInit(): void {
    this.notasService.$notas.subscribe(notas => {
      this.notas = notas;
      this.totales = this.estadisticasService.calculaTotales(notas);
    });
  }

}
