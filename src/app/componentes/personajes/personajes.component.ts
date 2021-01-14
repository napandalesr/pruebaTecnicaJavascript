import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from './../../rickandmortyapi.service'


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {
  nombre:string;
  pagina=1;

  personajes:Object;
  constructor(private api:RickandmortyapiService) { 
     
  }

  ngOnInit() {
    this.api.buscarPersonaje(this.nombre,this.pagina).then(data => {
      this.personajes=data.results
    });
    
  }

}
