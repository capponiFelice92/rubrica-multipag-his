import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricerca-contatti',
  templateUrl: './ricerca-contatti.component.html',
  styleUrls: ['./ricerca-contatti.component.css']
})
export class RicercaContattiComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mainPage(){
    this.router.navigateByUrl('/home-page');
  }
}
