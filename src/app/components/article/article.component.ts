import { Component, OnInit } from '@angular/core';
//import { Article } from '../../models/article';
//import { ArticleService } from '../../services/article.service';
//import { Global } from '../../services/global';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  //providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
    //public articles: Article[];
    public url: string;
    public article: string

  constructor(
      //private _articleService: ArticleService
  ){
    //this.url = Global.url;
   }

  ngOnInit() {
    //this.getArticle();
  }
/*
  getArticle(){
    this._articleService.getArticles().subscribe(
      response => {
        console.log(response);
        if(response){
          this.articles = response.articles;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
*/
}
