import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome: String = "Felipe";
  imagem = 'https://criticalhits.com.br/wp-content/uploads/2023/08/jujutsu-kaisen-divine-general-ma.jpg';
minhafuncao() :void {
  alert('clicou')
}
condicao1 = false;
condicao2 = true;
nomeDigitado = ''
}
