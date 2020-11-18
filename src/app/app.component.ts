import { Component, OnInit } from '@angular/core';
import { Nota } from './datos/nota-interface';
import notasJSON from './datos/notas.json';

@Component({
  selector: 'not-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cargando = false;
  public mostrarFormulario = '';
  public letrasAulas = [];
  public notas: Nota[] = [];

  public abreFormulario(letra: string): void {
    this.mostrarFormulario = letra;
  }

  public cierraFormulario(): void {
    this.mostrarFormulario = '';
  }

  public ngOnInit(): void {
    this.notas = notasJSON.notas;
    this.letrasAulas = this.notas
      .map(nota => nota.aula).
      filter((letra, i, letras) => letras.indexOf(letra) === i).sort();
  }
}
