import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../servicios/api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {
  personajes:any;
  constructor(private api:ApiService) { }
  p: number = 1;

  ngOnInit() {
    this.api.buscarPersonajes().then(data => {
      this.personajes=data.results
    });
  }

}
