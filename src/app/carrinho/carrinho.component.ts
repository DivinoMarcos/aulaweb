import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

import {CarrinhoService} from './carrinho.service';
import {Carrinho} from './carrinho';
import {Produto} from '../produto/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription : Subscription;
  produtos : Produto[];
  ativado : boolean = true

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    this.carrinhoService.carrinho.subscribe( (carrinho: Carrinho) => {
      this.produtos = carrinho.produtos;
    } );
  }

  ngOnDestroy() {
    this
        .subscription
        .unsubscribe();
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  removerProduto(id: number){
    this.carrinhoService.removerProduto(id);
  }


}
