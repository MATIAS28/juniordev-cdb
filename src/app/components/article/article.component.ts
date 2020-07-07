import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article;
  public boton;
  public status: string;
  public id: string;
  public content;
  public body;
  public etiquetas: string = "<p>";
  public ejemplo: string;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
        let id = params.id;

        this.getArticle(id);
    });
  }

  getArticle(id){
    this._articleService.getArticle(id).subscribe(
      response => {
        console.log(response);
        this.article = response.article;
        $('.body').append(this.article.content);

        //Funciones de articulos:

        this.boton = $('.BJS');
        if (this.boton.length >= 1) {
          //$('html, body').animate({ scrollTop: ($('.areas').offset().top)},600);
          $('.BJS').click(function() {
                setTimeout(function(){
                  $('body').css('background', '#f0d91d');
                  $('.BJS').css('background', '#f0d91d');
                  setTimeout(function(){
                    $('body').css('background', '#ff6620');
                    $('.BJS').css('background', '#ff6620');
                    setTimeout(function(){
                      $('body').css('background', 'rgba(255, 255, 255, 0.8)');
                      $('.BJS').css('background', '#182128');
                      setTimeout(function(){}, 600);
                   }, 1500);

                 }, 1500);
               }, 1000);

          });
        }

      },
      error =>{
        console.log(<any>error)
      }
    );
  }

}
