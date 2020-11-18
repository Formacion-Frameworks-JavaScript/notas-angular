import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nota } from './datos/nota-interface';
import notasJSON from './datos/notas.json';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private notas = new BehaviorSubject<Nota[]>([]);
  public $notas = this.notas.asObservable();

  constructor() {
    this.loadNotas();
  }

  private loadNotas(): void {
    this.notas.next(notasJSON.notas);
  }

  public crearNota(nota: Nota): void {
    const nuevaId = this.notas.getValue()[this.notas.getValue().length - 1].id + 1;
    this.notas.next([...this.notas.getValue(), { ...nota, id: nuevaId }]);
  }

  public borrarNota(nota: Nota): void {
    this.notas.next(this.notas.getValue().filter(n => n !== nota));
  }

  public modificarNota(id: number, notaNumerica: number): void {
    this.notas.next(this.notas.getValue().map(nota => {
      if (nota.id === id) {
        return {
          ...nota,
          nota: notaNumerica
        };
      } else {
        return nota;
      }
    }));
  }
}
