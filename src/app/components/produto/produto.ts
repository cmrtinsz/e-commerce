import { Component, Input, output } from '@angular/core';
import{UpperCasePipe, CurrencyPipe} from '@angular/common';
import { ListaProdutos } from '../lista-produtos/lista-produtos';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome: string = '';
  @Input () preco: number = 0;
}
 
