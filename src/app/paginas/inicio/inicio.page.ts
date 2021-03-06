import { Component, OnInit } from '@angular/core';
interface Componente {
  icono: string;
  nombre :string;
  direccion:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente:Componente[]=[
    {
      icono:'person-outline',
      nombre:'Action Sheet',
      direccion:'/action-sheet',
    },
    {
      icono:'pricetag-outline',
      nombre:'Alert',
      direccion:'/alert',
    },
    {
      icono:'planet-outline',
      nombre:'Fab',
      direccion:'/fab',
    },
    {
      icono:'rocket-outline',
      nombre:'Date Time',
      direccion:'/datetime',
    },
    {
      icono:'albums-outline',
      nombre:'Botones',
      direccion:'/buttons',
    },
    {
      icono:'accessibility-outline',
      nombre:'Avatar',
      direccion:'/avatar',
    },
    {
      icono:'attach-outline',
      nombre:'Cards',
      direccion:'/cards',
    },
    {
      icono:'at-circle-outline',
      nombre:'Slides',
      direccion:'/slides',
    },
    {
      icono:'bag-remove-outline',
      nombre:'Check',
      direccion:'/check',
    },
    {
      icono:'calculator-outline',
      nombre:'Grid',
      direccion:'/grid',
    },
    {
      icono:'chatbubble-outline', 
      nombre:'Toast',
      direccion:'/toast',
    },
    {
      icono:'card-outline', 
      nombre:'Popover',
      direccion:'/popover',
    },
    {
      icono:'arrow-redo-outline', 
      nombre:'Input',
      direccion:'/input',
    },
    {
      icono:'infinite-outline', 
      nombre:'Infinite Scroll',
      direccion:'/scroll',
    },
    {
      icono:'heart-outline', 
      nombre:'Listas',
      direccion:'/listas',
    },
    {
      icono:'trash-outline', 
      nombre:'Listas Reordenadas',
      direccion:'/list-reorder',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
