import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Nota } from './datos/nota-interface';
import notasJSON from './datos/notas.json';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private notas = new BehaviorSubject<Nota[]>([]);
  public $notas = this.notas.asObservable();

  constructor(private apiService: ApiService) {
    this.loadNotas();
  }

  private loadNotas(): void {
    this.apiService.getNotas().subscribe(notas => this.notas.next(notas));
  }

  public crearNota(nota: Nota): void {
    this.apiService.crearNota(nota).subscribe(nuevaNota => {
      this.notas.next([...this.notas.getValue(), nota]);
      this.loadNotas();
    });
  }

  public borrarNota(nota: Nota): void {
    this.apiService.borrarNota(nota).subscribe(resp => {
      if (resp.status === 200) {
        this.notas.next(this.notas.getValue().filter(n => n !== nota));
        this.loadNotas();
      }
    });
  }

  public modificarNota(id: number, notaNumerica: number): void {
    this.apiService.modificarNota(id, notaNumerica).subscribe(nuevaNota => {
      this.notas.next(this.notas.getValue().map(nota => {
        if (nota.id === id) {
          return nuevaNota;
        } else {
          return nota;
        }
      }));
      this.loadNotas();
    });
  }
}
