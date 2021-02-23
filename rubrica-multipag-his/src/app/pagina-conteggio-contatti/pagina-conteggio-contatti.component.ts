import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-conteggio-contatti',
  templateUrl: './pagina-conteggio-contatti.component.html',
  styleUrls: ['./pagina-conteggio-contatti.component.css']
})
export class PaginaConteggioContattiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numeroContatti:number = 0;
}
