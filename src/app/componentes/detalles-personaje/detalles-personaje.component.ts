import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RickandmortyapiService } from './../../rickandmortyapi.service'

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
  styleUrls: ['./detalles-personaje.component.sass']
})
export class DetallesPersonajeComponent implements OnInit {
  personaje:Object
  episodios: Array<string>
  dataEpisodios=[]
  constructor(private ruta:ActivatedRoute,private api:RickandmortyapiService) { }

  ngOnInit() {
    this.ruta.params.subscribe(params =>{
      this.api.getData(params['id']).then(data => {
      this.personaje=data
      this.episodios=data['episode']
      for(var i=0; i<this.episodios.length;i++){
        console.log(this.episodios[i])
        this.api.getEpisode(this.episodios[i]).then(datos => {
          this.dataEpisodios.push(datos) 
        })
      }
      console.log(this.dataEpisodios)
    })
    })
    
  }

}
