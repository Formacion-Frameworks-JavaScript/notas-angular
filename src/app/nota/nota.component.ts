import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../datos/nota-interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[not-nota]',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  @Input()
  public alumno: Nota;

  constructor() { }

  ngOnInit(): void {
  }

}
