import { Component } from '@angular/core';
import {pokemon} from 'src/modules/pokemon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  logo = "../assets/logopoke.png";
  imgProfile = "../assets/perfil.png"
  mensagem = "primeiro projeto em angular";
  links: string[]= ['home', 'pokedex', 'video game', 'card games', 'eventos' ];
  pokemons: pokemon[] = [
    new pokemon(1, 'pikachu','https://i.imgur.com/zfUMWMj.png' ,'roedor amarelo que solta raios','eletrico/rato','25HP','cauda de ferro','raichu','1','masc','fácil','6kgs' ),
    new pokemon(2, 'totodile', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png', 'jacaré baitola que cospe água','22HP','àgua','canhão de água','Croconaw','1','masc','médio','8kgs'),
    new pokemon(3, 'squirtle', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'tartaruga bolada','tartaruga/Água','25HP','tornado de água','Wartortle','1','masc','fácil','8kgs'),
    new pokemon(4, 'eevee', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png', 'uma raposinha que evolui com diversidade','normal/raposa','20HP','cabeçada','8 evoluções possiveis','1','masc','facil','4kgs'),
    new pokemon(5, 'jigglypuff','https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png','uma bola rosa cantora que faz os outros dormirem','fada/mágico','16HP','canção de ninar','Wigglytuff','1','fem','dificil','5Kgs'),
    new pokemon(6, 'pigioto','https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png','pássaro de ataque normal','normal/voador','56HP','investida','pidgeot','2','fem','médio','40Kgs'),
    new pokemon(7, 'ekans','https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png','uma cobra roxa com uma aparência duvidosa','venenoso','28HP','intimidar','arbok','1','fem','médio','7Kgs'),
    new pokemon(8, 'sandshrew','https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png','um tatuzinho fofo que vive no subsolo','rato/terra','22HP','tempestade de areia','sandslash','1','masc','fácil','12Kgs'),
    new pokemon(9, 'vulpix','https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png','uma raposa pequena de 6 caudas','raposa/fogo','20HP','flash de fogo','ninetalis','1','fem','fácil','10Kgs'),
    new pokemon(10, 'psyduck','https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png','uma pato que não consegue tirar as patas da cabeça','pato/água','18HP','cabeçada','golduck','1','masc','fácil','20Kgs'),


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
