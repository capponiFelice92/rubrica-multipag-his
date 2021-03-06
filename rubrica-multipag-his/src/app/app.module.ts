import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaginaConteggioContattiComponent } from './pagina-conteggio-contatti/pagina-conteggio-contatti.component';
import { RicercaContattiComponent } from './ricerca-contatti/ricerca-contatti.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaginaConteggioContattiComponent,
    RicercaContattiComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
