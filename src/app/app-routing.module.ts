import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './componente/detalles/detalles.component';
import { PersonajesComponent } from './componente/personajes/personajes.component';
import { Page404Component } from './componente/page404/page404.component';


const routes: Routes = [
  //Rutas 
  { path:'detalles/:id', component:DetallesComponent },
  { path:'', component:PersonajesComponent, pathMatch:'full' },
  { path:'nofound', component:Page404Component },
  { path:'**', redirectTo:'nofound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
