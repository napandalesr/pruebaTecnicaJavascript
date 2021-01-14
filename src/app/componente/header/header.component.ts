import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../servicios/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  names=[]

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.buscarPersonajes().then(data => {
      for(var i=0; i<data.results.length;i++){
        this.names.push(data.results[i].name)
      }
    });
  }

}
