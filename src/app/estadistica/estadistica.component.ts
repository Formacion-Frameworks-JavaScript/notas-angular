import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'not-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  @Input()
  public dato = 0;
  @Input()
  public porcentaje;
  @Input()
  public titulo = '';
  @Input()
  public truncado: boolean;

  constructor() { }

  public clasesIconos(): string {
    return this.dato >= 5 ? 'fa-smile icono-ok' : 'fa-frown icono-no-ok';
  }

  ngOnInit(): void {
  }

}
