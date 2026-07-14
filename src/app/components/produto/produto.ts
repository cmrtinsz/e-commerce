import { Component } from '@angular/core';
import{UpperCasePipe, CurrencyPipe} from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
 // produto = 'Notebook';
 // preco = 2500;
 // mostrarPreco = true
 // mostrarProduto = false;
 produto = [
  {produto:'Monitor',preco: 1000 } ,
  {produto: 'Gabinete' ,preco: 2500} ,
  {produto: 'Fone Gamer' , preco: 500} ,
  {produto: 'Mouse' , preco: 1200} ,
  {produto: 'Cadeira Gamer' , preco: 3000}
 ]
}
