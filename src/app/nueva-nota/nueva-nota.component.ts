import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'not-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {

  @Input()
  public letraFormulario = '';

  @Output()
  public cerrarFormulario = new EventEmitter<void>();

  constructor() { }

  public onCerrarFormulario(): void {
    this.cerrarFormulario.emit();
  }

  ngOnInit(): void {
  }

}
