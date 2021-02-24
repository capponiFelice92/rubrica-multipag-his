import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nomeToFormPanel="nome";
  cognomeToFormPanel="cognome";
  telefonoToFormPanel="telefono";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  passaPaginaConta(s: string) {
    this.router.navigateByUrl("/conteggio-contatti");
    console.log(s);
  }

  passaPaginaRicerca(s: string) {
    this.router.navigateByUrl("/ricerca-page");
    console.log(s);
  }
}
