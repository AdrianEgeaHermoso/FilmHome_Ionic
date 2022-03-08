import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  public images=[
    {src:'/assets/img/marlon.png'},
    {src:'assets/img/marilyn.png'},
    {src:'assets/img/burt.png'},
    {src:'assets/img/marx.png'},
  ];

  edad = 0;

  constructor() { }

  ngOnInit() {
  }

}
