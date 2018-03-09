import {Produto} from '../produto/produto';

export interface Carrinho {
    ativo: boolean;
    produtos : Produto[];
}