import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  novo: Vingador = new Vingador(null, '', '','');
  title: string;
  vingadores: Array<Vingador>;
  selecionado: Vingador;
  lista: Array<Vingador> = [];
  
  constructor(){

    this.title = 'Vingadores';
    this.vingadores = [
        new Vingador(0, 'Capitão América', 'Steve Rogers','https://i1.wp.com/www.showmetech.com.br/wp-content/uploads/2016/05/7hogps.jpg?resize=600%2C337'),
        new Vingador(1, 'Viúva Negra', 'Natasha Romanoff','https://i.pinimg.com/736x/ae/12/74/ae1274ac2ef6dc1c8f8d0e41a4bca575--famous-stars-scarlett-johansson.jpg'),
        new Vingador(2, 'Ms. Marvel', 'Carol Danvers','http://www.gamesfoda.net/wp-content/uploads/2016/05/04-kamala-final.jpg'),
        new Vingador(3, 'Deadpool', 'Wade Wilson','http://3.bp.blogspot.com/-xm7n-wgn3LU/T_53UwFbiuI/AAAAAAAABwk/LsGAAIk3r5E/s1600/ryan-reynolds-green-lantern.jpg'),
        new Vingador(4, 'Máquina de Combate', 'James Rhodes','https://static.comicvine.com/uploads/original/11122/111223985/5158451-2265410649-VYfNV.jpg')
    ]; 
    
}
cadastrar(): void{
  let novoId: number = 0;
  if(this.novo.id == null){
    novoId = this.vingadores.length + 1;}else{
    novoId = this.novo.id;
  }
  const nvin = new Vingador(novoId, this.novo.nome, this.novo.pessoa,this.novo.url);
  this.deletar(nvin);
  this.vingadores.push(nvin);
  this.novo = new Vingador(null, '', '','');
}
deletar(vingador: Vingador): void{
  
  for(let vin of this.vingadores){
    if(vingador.id != vin.id ){
     this.lista.push(vin);
    }
  }
    this.vingadores = this.lista;
    this.lista = []; 
}
editar(vingador: Vingador): void{
  this.novo = vingador;
}
  ngOnInit(): void {
  }
}
