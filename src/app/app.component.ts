import { Component } from '@angular/core';
import {pokemon} from 'src/modules/pokemon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  mensagem = "primeiro projeto em angular";
  pokemons: pokemon[] = [
    new pokemon(1, 'pikachu','https://i.imgur.com/zfUMWMj.png' ,'roedor amarelo que solta raios','eletrico','25HP','cauda de ferro','raichu','1','masc','fácil','6kgs' ),
    new pokemon(2, 'totodile', 'https://i.pinimg.com/736x/83/0e/0b/830e0b42d55f97cb8c23667174d224ad.jpg', 'jacaré baitola que cospe água','','','','','','','',''),
    new pokemon(3, 'squirtle', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'tartaruga bolada','','','','','','','',''),
    new pokemon(4, 'eevee', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png', 'uma raposinha que evolui com diversidade','','','','','','','',''),
    new pokemon(5, 'jigglypuff','https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png','uma bola rosa cantora que faz os outros dormirem','','','','','','','',''),
  ];
  selectPokemon?: pokemon;
  //mostra os detalhes do pokemon selecionado.
  mostrarDetalhes(pokemon: pokemon){
    this.selectPokemon = pokemon;
  }
  //fecha o modal
  fecharModal(){
    this.selectPokemon = undefined;
  }



}
