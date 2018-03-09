import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {URI_SERVER_API} from '../../app.api';
import {ErrorHandler} from '../../app.error-handler';

import {Pais} from "./pais";

@Injectable()
export class PaisService{
  constructor(private http: Http) {}

  findAll(): Observable<Pais[]>{
    return this.http
      .get(`${URI_SERVER_API}/pais`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }

  findOne(id: number): Observable<Pais>{
    return this.http
      .get(`${URI_SERVER_API}/pais/${id}`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }

  save(pais: Pais): Observable<Pais>{

    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers})

    if(pais.id){
      return this.http
        .put(`${URI_SERVER_API}/pais`, JSON.stringify(pais), options)
        .map(response => response.json().content)
        .catch(ErrorHandler.handleError);
    } 
    else {
      return this.http
        .post(`${URI_SERVER_API}/pais`, JSON.stringify(pais), options)
        .map(response => response.json().content)
        .catch(ErrorHandler.handleError);
    }

    
  }

  delete(id: number): Observable<any>{
    return this.http
      .delete(`${URI_SERVER_API}/pais/${id}`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }

}
