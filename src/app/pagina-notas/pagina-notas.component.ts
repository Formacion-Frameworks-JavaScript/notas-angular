import { Component, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { NotasService } from '../notas.service';

@Component({
  selector: 'not-pagina-notas',
  templateUrl: './pagina-notas.component.html',
  styleUrls: ['./pagina-notas.component.css']
})
export class PaginaNotasComponent implements OnInit {

  public cargando = true;
  public mostrarFormulario = '';
  public letrasAulas = [];
  public notas: Nota[] = [];

  constructor(private notasService: NotasService) { }

  public abreFormulario(letra: string): void {
    this.mostrarFormulario = letra;
  }

  public cierraFormulario(): void {
    this.mostrarFormulario = '';
  }

  public notasPorAula(letra: string): Nota[] {
    return this.notas.filter(nota => nota.aula === letra);
  }

  public ngOnInit(): void {
    this.notasService.$notas.subscribe(notas => {
      this.notas = notas;
      this.letrasAulas = this.notas
        .map(nota => nota.aula).
        filter((letra, i, letras) => letras.indexOf(letra) === i).sort();
      this.cargando = false;
    });
  }

}
