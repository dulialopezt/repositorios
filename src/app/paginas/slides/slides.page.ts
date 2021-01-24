import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slider =[
    {
      titulo:'Ionic es Asombroso',
      descripcion:'Ionic esta construido sobre Angular',
      imagen:"assets/img/ionic3.png",
    },
    {
      titulo:'Ionic es full nativo',
      descripcion:'Ionic tambien usa SASS',
      imagen:"assets/img/ionic1.png",
    },
    {
      titulo:'Ionic 3 es la ultima version !!!',
      descripcion:'Angular 4 es la ultima version',
      imagen:"assets/img/ionic2.jpg",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
