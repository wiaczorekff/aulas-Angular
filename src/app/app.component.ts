import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  // Lista de filmes por categoria
  filmesAcao = [
    { titulo: 'Robocop', descricao: 'policial meio robo meio humano', imagem: 'https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' },
    { titulo: 'John Wick', descricao: 'um cara super preparado para todo tipo de tiroteio', imagem: 'https://m.media-amazon.com/images/I/81J1DaRKzUL._AC_UF1000,1000_QL80_.jpg' },
    { titulo: 'Mercenários', descricao: 'um grupo de mercenários com atores lendários', imagem: 'https://media.fstatic.com/NzMZhPGYhYEhEitZuWVSECnvJUM=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/016a43dd593c5661bb1772e89b8aa88d_1.jpg' },
    { titulo: 'Top Gun', descricao: 'um baita piloto de caça que abate todos os inimigos', imagem: 'https://musicart.xboxlive.com/7/8fa06100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' },
    { titulo: 'Fury', descricao: 'soldados de um tanque que se chama fury na WW2', imagem: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg' },
  ];

  filmesComedia = [
    { titulo: 'Jackass', descricao: 'um bando de idiotas, fazendo todo tipo de dessafio idiota', imagem: 'https://m.media-amazon.com/images/I/81Tzl++n2WL._AC_UF894,1000_QL80_.jpg' },
    { titulo: 'Gente grande', descricao: 'um pai de familia rico numa cidade pequena causando terror', imagem: 'https://upload.wikimedia.org/wikipedia/pt/f/fe/Grownupsmovie.jpg' },
    { titulo: 'inatividade paranormal', descricao: 'era pra ser uma casa assombrada mas não, é comédia', imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/94/14/75/20420264.jpg' },
    { titulo: 'todo mundo em panico', descricao: 'um grupo de adolescentes fugindo do panico so com comédia', imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/ScaryMovie.jpg' },
    { titulo: 'se beber não case', descricao: '3 malucos chapados de ecstasy', imagem: 'https://m.media-amazon.com/images/I/618FiO7H+sS._AC_UF894,1000_QL80_.jpg' },
    
  ];

  filmesTerror = [
    { titulo: 'A freira', descricao: 'espirito assombrado de freira na igreja', imagem: 'https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg' },
    { titulo: 'invocação do mal', descricao: 'Casal Warren em mais uma assombração', imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/The_Conjuring.jpg' },
    { titulo: 'atividade paranormal', descricao: 'casa assombrada atras de uma criança', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/89/84/20028680.jpg' },
    { titulo: 'panico', descricao: 'um assasino com mascara de panico que mata geral numa cidade', imagem: 'https://media.fstatic.com/Hbbcgo03XKDiB46RmcgRrgJY1aU=/322x478/smart/filters:format(webp)/media/movies/covers/2023/11/where-do-you-see-the-franchise-going-after-scream-7-v0-z3exbtmkdfub1.jpg' },
    { titulo: 'terrifier', descricao: 'um palhaço maléfico que tortura antes de matar', imagem: 'https://upload.wikimedia.org/wikipedia/pt/4/4f/Terrifier_2_-_poster.jpg' },
    
  ];
}