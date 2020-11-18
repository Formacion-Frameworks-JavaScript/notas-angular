import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'not-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @Input()
  public letra = '';

  constructor() { }

  ngOnInit(): void {
  }

}
