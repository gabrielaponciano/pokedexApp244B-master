import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons: any = [];
  public pagina = 1;
  public totalPaginas = 1;
  public listaPokemonExibir: any = [];

  constructor(private userService: UserService) {}

  ionViewWillEnter(){
    this.buscarPokemons(1);
  }

  public buscarPokemons(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
 
  this.userService.buscarTodos(pagina).subscribe(dados => {
    this.listaPokemonExibir = [];
    this.totalPaginas = dados['count'];
    let listaApi = dados['results'];
    for (let pokemon of listaApi) {
      this.userService.buscarId(pokemon.url).subscribe(dadosPokemon => {
        this.listaPokemonExibir.push(dadosPokemon);
      });
    }
  });
  }
}
