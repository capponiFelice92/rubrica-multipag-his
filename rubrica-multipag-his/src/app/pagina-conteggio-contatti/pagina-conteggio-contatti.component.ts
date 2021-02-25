import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';

@Component({
  selector: 'app-pagina-conteggio-contatti',
  templateUrl: './pagina-conteggio-contatti.component.html',
  styleUrls: ['./pagina-conteggio-contatti.component.css']
})
export class PaginaConteggioContattiComponent implements OnInit {

  constructor(private router: Router, public med: ModeratorService) { }

  ngOnInit(): void {
  }

  tornaPaginaPrincipale() {
    this.router.navigateByUrl('/home-page');
  }
}
