import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinformac',
  templateUrl: './popinformac.component.html',
  styleUrls: ['./popinformac.component.scss'],
})
export class PopinformacComponent implements OnInit {
  items=Array(10);

  constructor(private popoverControl:PopoverController ) { }

  ngOnInit() {}
  
  onClick(valor:number){
    this.popoverControl.dismiss({
      item:valor
    })
  }
}
