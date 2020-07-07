import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'juniordev';


  ngOnInit(){}
  scroll(){
    $('html, body').animate({ scrollTop: ($('.divs').offset().top)},600);
  }
}
