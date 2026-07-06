import { Component, signal } from '@angular/core';
//!import { RouterOutlet } from '@angular/router';//Remove o uso do RouterOutlet por enquanto! Não está em uso.
import { Produto } from './components/produto/produto'; //Importa o components do produto para ser exibido no app criado
@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
