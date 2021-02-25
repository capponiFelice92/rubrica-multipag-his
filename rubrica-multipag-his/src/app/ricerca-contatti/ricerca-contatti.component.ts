import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';

@Component({
  selector: 'app-ricerca-contatti',
  templateUrl: './ricerca-contatti.component.html',
  styleUrls: ['./ricerca-contatti.component.css']
})
export class RicercaContattiComponent implements OnInit {
  constructor(private router: Router, public med:ModeratorService) { }

  ngOnInit(): void {
  }

  mainPage(){
    this.router.navigateByUrl('/home-page');
  }
}
