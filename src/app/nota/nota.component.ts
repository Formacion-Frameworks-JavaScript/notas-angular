import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { NotasService } from '../notas.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[not-nota]',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  @Input()
  public alumno: Nota;

  public nuevaNota: number;
  public editando = false;

  constructor(private notasService: NotasService) { }

  public edita(): void {
    this.nuevaNota = this.alumno.nota;
    this.editando = true;
  }

  public desedita(): void {
    this.editando = false;
  }

  public grabaNuevaNota(): void {
    this.notasService.modificarNota(this.alumno.id, this.nuevaNota);
    this.editando = false;
  }

  public borrarNota(e: Event): void {
    e.preventDefault();
    this.notasService.borrarNota(this.alumno);
  }

  ngOnInit(): void {
  }

}
