import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { NotasService } from '../notas.service';

@Component({
  selector: 'not-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @Input()
  public letra = '';
  @Input()
  public mostrarFormulario = '';

  public notas: Nota[] = [];

  @Output()
  public abrirFormulario = new EventEmitter<string>();

  constructor(private notasService: NotasService) { }

  public onAbrirFormulario(e: Event): void {
    e.preventDefault();
    this.abrirFormulario.emit(this.letra);
  }

  ngOnInit(): void {
    this.notasService.$notas.subscribe(notas => this.notas = notas.filter(nota => nota.aula === this.letra));
  }

}
