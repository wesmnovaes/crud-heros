import { Component, OnInit, Input } from '@angular/core';
import { Vingador } from '../vingador';


@Component({
  selector: 'app-lista-herois',
  templateUrl: './lista-herois.component.html',
  styleUrls: ['./lista-herois.component.css']
})
export class ListaHeroisComponent implements OnInit {
  @Input() heroi: Vingador;

  title: string;
  vingadores: Array<Vingador>;
  selecionado: Vingador;
  
  constructor(){

    this.title = 'Vingadores';
    this.vingadores = [
        new Vingador(1, 'Capitão América', 'Steve Rogers',''),
        new Vingador(2, 'Viúva Negra', 'Natasha Romanoff',''),
        new Vingador(3, 'Ms. Marvel', 'Carol Danvers',''),
        new Vingador(4, 'Deadpool', 'Wade Wilson',''),
        new Vingador(5, 'Gavião Arqueiro', 'Clint Barton','')
    ]; 
}
add(vingador: Vingador){
  this.vingadores.push(vingador);
}
ngOnInit() {
}
}
