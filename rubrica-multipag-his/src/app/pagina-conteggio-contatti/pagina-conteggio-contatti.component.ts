import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-conteggio-contatti',
  templateUrl: './pagina-conteggio-contatti.component.html',
  styleUrls: ['./pagina-conteggio-contatti.component.css']
})
export class PaginaConteggioContattiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  numeroContatti:number = 0;

  tornaPaginaPrincipale(){
    this.router.navigateByUrl('/home-page');
  }
}
