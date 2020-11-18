import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from '../datos/nota-interface';
import { NotasService } from '../notas.service';

@Component({
  selector: 'not-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {

  @Input()
  public letraFormulario = '';

  public nuevaNota: Nota = {
    id: 0,
    nombre: '',
    apellido: '',
    nota: null,
    aula: ''
  };

  @Output()
  public cerrarFormulario = new EventEmitter<void>();

  constructor(private notasService: NotasService) { }

  public onCerrarFormulario(): void {
    this.cerrarFormulario.emit();
  }

  public enviaFormulario(): void {
    this.notasService.crearNota(this.nuevaNota);
    this.cerrarFormulario.emit();
  }

  ngOnInit(): void {
    this.nuevaNota.aula = this.letraFormulario;
  }

}
