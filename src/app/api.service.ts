import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Nota } from './datos/nota-interface';

const urlAPI = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(urlAPI).pipe(
      retry(3)
    );
  }

  public crearNota(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(urlAPI, nota);
  }

  public modificarNota(id: number, notaNumerica: number): Observable<Nota> {
    return this.http.patch<Nota>(urlAPI + id, { nota: notaNumerica });
  }

  public borrarNota(nota: Nota): Observable<HttpResponse<{}>> {
    return this.http.delete<{}>(urlAPI + nota.id, { observe: 'response' });
  }
}
