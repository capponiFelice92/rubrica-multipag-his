import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-ricerca-contatti',
  templateUrl: './ricerca-contatti.component.html',
  styleUrls: ['./ricerca-contatti.component.css']
})
export class RicercaContattiComponent implements OnInit {

  criterioRicerca: string;
  listaFiltrata: Persona[]=[];
  listaCompletaVis: boolean = true;
  listaFiltrataVis: boolean = false;
  constructor(private router: Router, public med:ModeratorService) { }


  ngOnInit(): void {
  }

  mainPage(){
    this.router.navigateByUrl('/home-page');
  }

  cerca(){
    this.listaCompletaVis = false;
    this.listaFiltrataVis = true;
    this.listaFiltrata = this.med.lista;
    this.listaFiltrata = this.listaFiltrata.filter(p=>p.nome == this.criterioRicerca || p.cognome == this.criterioRicerca || p.telefono == this.criterioRicerca);

  }
}
