import { Injectable } from '@angular/core';

import {Http, Headers, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

import {Produto} from './produto';

@Injectable()
export class ProdutoService {

    public API_URL: string = 'http://localhost:8081';
    
    constructor(public http : Http){}

    getProdutos(): any{
        return new Promise((resolve, reject) => {
            this.http
                    .get(`${this.API_URL}/produto`)
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data.content)
                        },
                        error => {
                            reject(error);
                        }
                    )
        });
    }


}