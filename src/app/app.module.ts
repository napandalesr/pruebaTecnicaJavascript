import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { DetallesPersonajeComponent } from './componentes/detalles-personaje/detalles-personaje.component';
import { Page404Component } from './componentes/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonajesComponent,
    DetallesPersonajeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
