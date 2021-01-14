import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from './../rickandmortyapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  nombre:string;
  pagina=1;
  names=[]

  constructor(private api:RickandmortyapiService) { }

  ngOnInit() {
    this.api.buscarPersonaje(this.nombre,this.pagina).then(data => {
      for(var i=0; i<data.results.length;i++){
        this.names.push(data.results[i].name)
      }
    });
  }

}
