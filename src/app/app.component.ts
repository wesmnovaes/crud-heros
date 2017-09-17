import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import { ListaHeroisComponent } from './lista-herois/lista-herois.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  novo: Vingador = new Vingador(0, '', '','');
  t: ListaHeroisComponent;
  constructor(){  
  }

  cadastrar(nome: string, pessoa: string, url: string){
    this.novo = new Vingador(1,nome,pessoa,url);
    this.t.add(this.novo);
  }
  
  ngOnInit(): void {
  }
}
