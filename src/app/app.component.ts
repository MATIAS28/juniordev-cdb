import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juniordev';

  scroll(){
    $('html, body').animate({ scrollTop: ($('.divs').offset().top)},600);
  }
}
