import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PaginaConteggioContattiComponent } from './pagina-conteggio-contatti/pagina-conteggio-contatti.component';
import { RicercaContattiComponent } from './ricerca-contatti/ricerca-contatti.component';

const routes: Routes = [
  {path: 'home-page', component:HomePageComponent},
  {path: 'ricerca-page', component:RicercaContattiComponent},
  {path: 'conteggio-contatti', component:PaginaConteggioContattiComponent},
  {path: '', redirectTo:'/home-page', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
