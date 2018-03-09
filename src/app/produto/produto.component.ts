import { Component, OnInit } from '@angular/core';

import {CarrinhoService} from '../carrinho/carrinho.service';
import {ProdutoService} from './produto.service';
import {Produto} from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos : Produto[];


  constructor(
    private produtoService : ProdutoService,
    private carrinhoService: CarrinhoService
  ) {

    this.produtoService.getProdutos()
      .then(result => {
        this.produtos = result;
      })
      .catch( error => {
        console.log(' ----- ERROR ----- '+ error.message);
      });

   }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  ngOnInit() {
  }

}
