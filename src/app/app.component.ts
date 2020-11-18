import { Component, OnInit } from '@angular/core';
import { Nota } from './datos/nota-interface';
import notasJSON from './datos/notas.json';
import { NotasService } from './notas.service';

@Component({
  selector: 'not-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
