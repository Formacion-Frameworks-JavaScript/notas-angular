import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  public abrirFormulario = new EventEmitter<string>();

  constructor() { }

  public onAbrirFormulario(e: Event): void {
    e.preventDefault();
    this.abrirFormulario.emit(this.letra);
  }

  ngOnInit(): void {
  }

}
