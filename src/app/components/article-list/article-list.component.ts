import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  public articles: Article[];
  public status: string;
  public id: string;
  public title;
  public body;
  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }


  getArticles(){
    //Devolver articulo
    this._articleService.getArticles().subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
          }else{
            this.status = 'failed';
          }

        },
        error => {
          console.log(<any>error);
        }
    );
  }

}
