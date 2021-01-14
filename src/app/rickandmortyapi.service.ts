import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  constructor(private http:HttpClient) { }

  buscarPersonaje(consulta ='',pagina=1){
    const url = 'https://rickandmortyapi.com/api/character';
    return fetch(url).then(response => response.json())
  }

  getData(id:number){
    const url = 'https://rickandmortyapi.com/api/character/'+id;
    return fetch(url).then(response => response.json())
  }

  getEpisode(url:string){
    return fetch(url).then(response => response.json())
  }
}
