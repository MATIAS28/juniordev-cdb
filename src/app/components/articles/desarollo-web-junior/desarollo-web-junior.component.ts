import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-desarollo-web-junior',
  templateUrl: './desarollo-web-junior.component.html',
  styleUrls: ['./desarollo-web-junior.component.css']
})
export class DesarolloWebJuniorComponent implements OnInit {
  public etiquetas: string = "<p>";
  public ejemplo: string;
  constructor() {

  }

  ngOnInit(){
  }

  scroll(){
    $('html, body').animate({ scrollTop: ($('.divs').offset().top)},600);
  }


  cambiaColor(){
    setTimeout(function(){
      $('#content').css('background', '#f0d91d');
      $('.BJS').css('background', '#f0d91d');
      document.getElementById("demo").innerHTML = "3";
      setTimeout(function(){
        $('#content').css('background', '#ff6620');
        $('.BJS').css('background', '#ff6620');
        document.getElementById("demo").innerHTML = "2";
        setTimeout(function(){
          $('#content').css('background', 'rgba(255, 255, 255, 0.8)');
          $('.BJS').css('background', '#182128');
          document.getElementById("demo").innerHTML = "1";
          setTimeout(function(){document.getElementById("demo").innerHTML = "JS";}, 600);
       }, 1500);

     }, 1500);
   }, 1000);
  }


  countDown(){


  }

}
