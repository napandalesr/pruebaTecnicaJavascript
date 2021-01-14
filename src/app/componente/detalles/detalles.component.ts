import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../servicios/api.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.sass']
})
export class DetallesComponent implements OnInit {
  p: number = 1;
  personaje:any
  episodios: Array<string>
  dataEpisodios=[]
  constructor(private ruta:ActivatedRoute,private api:ApiService) { }

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
