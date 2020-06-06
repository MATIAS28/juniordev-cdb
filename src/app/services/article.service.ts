import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import { Global } from './global';

@Injectable()

export class ArticleService{
  public url: string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  testService(){
    return "probando servicio de Angular";
  }


  saveArticle(article: Article):Observable<any>{
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'save-article', params, {headers: headers});
  }

  getArticles():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'articles', {headers:headers});
  }

  getArticle(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'article/'+id, {headers: headers});
  }

  deleteArticle(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url+'article/'+id, {headers:headers});
  }

  updateArticle(article):Observable<any>{
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'article/'+article._id, params, {headers: headers});
  }
}
