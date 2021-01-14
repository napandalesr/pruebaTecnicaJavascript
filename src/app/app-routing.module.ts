import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { DetallesPersonajeComponent } from './componentes/detalles-personaje/detalles-personaje.component';
import { Page404Component } from './componentes/page404/page404.component';


const routes: Routes = [
  { path:'detalles/:id', component:DetallesPersonajeComponent },
  { path:'', component:PersonajesComponent, pathMatch:'full' },
  { path:'nofound', component:Page404Component },
  { path:'**', redirectTo:'nofound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
