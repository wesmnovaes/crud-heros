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
  title: string;
  vingadores: Array<Vingador>;
  selecionado: Vingador;
  constructor(){

    this.title = 'Vingadores';
    this.vingadores = [
        new Vingador(1, 'Capitão América', 'Steve Rogers','www.capitão.com'),
        new Vingador(2, 'Viúva Negra', 'Natasha Romanoff',''),
        new Vingador(3, 'Ms. Marvel', 'Carol Danvers',''),
        new Vingador(4, 'Deadpool', 'Wade Wilson',''),
        new Vingador(5, 'Gavião Arqueiro', 'Clint Barton','')
    ]; 
}
cadastrar(): void{
  const novoId: number = this.vingadores.length + 1;
  this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa,this.novo.url));
  this.novo = new Vingador(0, '', '','');
}
deletar(vingador: Vingador): void{
  this.vingadores.splice(vingador.id,1); 
}
editar(vingador: Vingador): void{
  this.novo = vingador;
}
  ngOnInit(): void {
  }
}
