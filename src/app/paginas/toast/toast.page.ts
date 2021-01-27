import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast(mensage:string) {
    const toast = await this.toastController.create({
      message: mensage,
      duration: 2000
    });
    toast.present();
  }


  aceptarClick(){
    this.presentToast("Estamos aceptando Aceptar Toast");
  }
    
  cancelarClick(){
    this.presentToast("Cancelando Toast");
  }

}
