import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-desarollo-web',
  templateUrl: './desarollo-web.component.html',
  styleUrls: ['./desarollo-web.component.css']
})
export class DesarolloWebComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  scroll(){
    $('html, body').animate({ scrollTop: ($('.areas').offset().top)},600);
  }

}
