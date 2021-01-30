import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  usuarios: Observable<any>
  constructor(private dataservice : DataService) { }
  @ViewChild (IonList) ionList:IonList;
  ngOnInit() {
    this.usuarios=this.dataservice.getUsuarios() ;
  }
  favorito(usuario){
    console.log(usuario);
    this.ionList.closeSlidingItems();
  }
  compartir(usuario){
    console.log(usuario);
    this.ionList.closeSlidingItems();
  }
  eliminar(usuario){
    console.log(usuario)
    this.ionList.closeSlidingItems();
  }
}
