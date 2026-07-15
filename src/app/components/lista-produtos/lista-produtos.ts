import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produto = [
    {nome:'Teclado', preco: 247 },
    {nome:'Mouse', preco: 77 },
    {nome:'Telefone', preco:90 },
    {nome:'Cadeira Gamer', preco: 160 }
  ];
}
