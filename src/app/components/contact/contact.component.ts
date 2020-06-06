import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;


  //@ViewChild('textos') textos: any;

  constructor(
  ) {
    this.title = 'Contacto';
  }

  ngOnInit() {}

}
