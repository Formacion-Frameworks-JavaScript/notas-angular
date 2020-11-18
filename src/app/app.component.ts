import { Component } from '@angular/core';

@Component({
  selector: 'not-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cargando = false;
  public mostrarFormulario = '';
  public letrasAulas = ['A', 'B', 'C'];
}
