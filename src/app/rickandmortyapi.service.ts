import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { personajes } from './interfaces/personaje'

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  constructor(private http:HttpClient) { }

  buscarPersonaje(consulta ='',pagina=2){
    return this.http.get<personajes[]>('https://rickandmortyapi.com/api/character?name='+consulta+'&page='+pagina)
  }

  getData(id:number){
    return this.http.get<personajes[]>('https://rickandmortyapi.com/api/character?name='+id)
  }
}
