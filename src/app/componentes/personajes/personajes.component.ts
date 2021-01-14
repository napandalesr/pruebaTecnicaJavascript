import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from './../../rickandmortyapi.service'
import { personajes } from './../../interfaces/personaje'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {
  personaje:personajes[]=[];
  scrollHeight:number=200;
  scrollShow:number=500;
  nombre:string;
  pagina=1;

  personajes:personajes[]=[]
  constructor(private api:RickandmortyapiService) { }

  ngOnInit() {
  }

  obtenerDatos():void{
    this.api.buscarPersonaje(this.nombre,this.pagina).subscribe((res:any)=>{
      const { info, results } = res;
      console.log(res.results)
      this.personajes=res.results
    })
  }

}
