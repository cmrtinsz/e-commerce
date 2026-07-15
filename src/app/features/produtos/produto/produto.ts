import { Component, Input, Output, EventEmitter } from '@angular/core';
import{UpperCasePipe, CurrencyPipe} from '@angular/common';
import { ListaProdutos } from '../lista-produtos/lista-produtos';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  //Entrada de dados de lista produtos.ts (output)
  @Input() nome: string = '';
  @Input () preco: number = 0;

  //saída de dados de produtos selecionados para lista produtos.ts 
   @Output() produtoSelecionado = new EventEmitter<string>();

   selecionarProduto() {
    this.produtoSelecionado.emit(this.nome); 
   }
}
 
