import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Carrinho} from './carrinho'
import {Produto} from '../produto/produto'

@Injectable()
export class CarrinhoService {

    private carrinhoSubject = new Subject<Carrinho>();
    produtos: Produto[] = [];
    carrinho = this.carrinhoSubject.asObservable();
    
    
    constructor(public http : Http){}

    adicionarProduto(produto: Produto){
        this.produtos.push(produto);
        this.carrinhoSubject.next(<Carrinho>{ativo: true , produtos:  this.produtos});
    }

    removerProduto(id: number){
       this.produtos =  this.produtos.filter(  produto => produto.id !== id);
       this.carrinhoSubject.next(<Carrinho>{ativo: true , produtos:  this.produtos});
    }


}