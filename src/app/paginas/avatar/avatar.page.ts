import { Component, OnInit } from '@angular/core';
interface avatar{
     icono:string;
     nombre:string;
}
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  avatar:avatar[]=[
    {
      icono:"assets/img/simpsons3.jpg",
      nombre:"Homero Simpson"
    },
    {
      icono:"assets/img/barthsimpons.png",
      nombre:"Bart Simpson"
    },
    {
      icono:"assets/img/lisasimpsons.png",
      nombre:"Lisa Simpson"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
