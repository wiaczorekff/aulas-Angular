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
    { titulo: 'Robocop', descricao: 'Um policial é transformado em uma mistura de homem e máquina para combater o crime em uma cidade distópica.', imagem: 'https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' },
    { titulo: 'John Wick', descricao: 'John Wick, um ex-assassino de aluguel, busca vingança após o roubo de seu carro e a morte de seu cachorro, os últimos vínculos com seu passado.', imagem: 'https://m.media-amazon.com/images/I/81J1DaRKzUL._AC_UF1000,1000_QL80_.jpg' },
    { titulo: 'Mercenários', descricao: 'Um grupo de mercenários altamente treinados é contratado para realizar missões perigosas e secretas em nome da justiça.', imagem: 'https://media.fstatic.com/NzMZhPGYhYEhEitZuWVSECnvJUM=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/016a43dd593c5661bb1772e89b8aa88d_1.jpg' },
    { titulo: 'Top Gun', descricao: ' Um talentoso piloto de caça, conhecido como "Maverick," enfrenta desafios emocionantes durante o treinamento na escola de aviação naval Top Gun.', imagem: 'https://musicart.xboxlive.com/7/8fa06100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' },
    { titulo: 'Fury', descricao: 'Durante a Segunda Guerra Mundial, um sargento lidera uma tripulação de um tanque Sherman chamado "Fury" em uma missão perigosa atrás das linhas inimigas na Europa.', imagem: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg' },
  ];

  filmesComedia = [
    { titulo: 'Jackass', descricao: '"Jackass" é uma série de filmes e programas de televisão que apresenta uma equipe de indivíduos realizando façanhas e brincadeiras extremas e muitas vezes absurdas, resultando em comédia física e situações hilárias.', imagem: 'https://m.media-amazon.com/images/I/81Tzl++n2WL._AC_UF894,1000_QL80_.jpg' },
    { titulo: 'Gente grande', descricao: 'Um grupo de amigos de infância se reúne após muitos anos para passar um fim de semana juntos, reacendendo laços e enfrentando situações cômicas enquanto lidam com as complexidades da vida adulta.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/f/fe/Grownupsmovie.jpg' },
    { titulo: 'inatividade paranormal', descricao: ' Uma paródia de filmes de terror, "Inatividade Paranormal" brinca com os clichês do gênero, transformando uma casa mal-assombrada em uma fonte de comédia e situações absurdas.', imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/94/14/75/20420264.jpg' },
    { titulo: 'todo mundo em panico', descricao: 'Uma série de filmes de paródia que satiriza diversos gêneros cinematográficos, especialmente filmes de terror, incorporando humor irreverente e referências culturais.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/ScaryMovie.jpg' },
    { titulo: 'se beber não case', descricao: 'Um grupo de amigos embarca em uma despedida de solteiro em Las Vegas que rapidamente sai de controle. O filme segue as tentativas do grupo de lembrar e lidar com os eventos caóticos da noite anterior.', imagem: 'https://m.media-amazon.com/images/I/618FiO7H+sS._AC_UF894,1000_QL80_.jpg' },
    
  ];

  filmesTerror = [
    { titulo: 'A freira', descricao: 'Em "A Freira", uma freira e um padre são enviados pelo Vaticano para investigar o suicídio de uma freira romena. Ao chegarem, descobrem uma força maligna que ameaça a todos.', imagem: 'https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg' },
    { titulo: 'invocação do mal', descricao: 'Baseado em eventos reais, "Invocação do Mal" segue os investigadores paranormais Ed e Lorraine Warren enquanto ajudam uma família a lidar com atividades sobrenaturais em sua casa assombrada.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/The_Conjuring.jpg' },
    { titulo: 'atividade paranormal', descricao: '"Atividade Paranormal" é um filme de terror encontrado que segue um casal que acredita ser assombrado por uma presença demoníaca enquanto documenta eventos sobrenaturais em sua casa.', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/89/84/20028680.jpg' },
    { titulo: 'panico', descricao: '"Pânico" é um filme de terror e suspense que segue um assassino mascarado que aterroriza uma cidade enquanto um grupo de jovens tenta descobrir a identidade do assassino.', imagem: 'https://media.fstatic.com/Hbbcgo03XKDiB46RmcgRrgJY1aU=/322x478/smart/filters:format(webp)/media/movies/covers/2023/11/where-do-you-see-the-franchise-going-after-scream-7-v0-z3exbtmkdfub1.jpg' },
    { titulo: 'terrifier', descricao: 'Em "Terrifier", um palhaço sinistro aterroriza uma cidade, cometendo atos brutais e sádicos. O filme se concentra nas horríveis consequências dos encontros com esse palhaço perturbador.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/4/4f/Terrifier_2_-_poster.jpg' },
    
  ];
}