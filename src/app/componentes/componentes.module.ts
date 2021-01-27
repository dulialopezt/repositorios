import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopinformacComponent } from './popinformac/popinformac.component';



@NgModule({
  declarations: [
    HeaderComponent,
    IonicModule,
    PopinformacComponent
  ],
  exports:[
    HeaderComponent,
    PopinformacComponent
  ],
  imports: [
    CommonModule,IonicModule
  ]
})
export class ComponentesModule { }
