import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PopinformacComponent } from 'src/app/componentes/popinformac/popinformac.component';

import { PopoverPage } from './popover.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  entryComponents:[PopinformacComponent],
  imports: [RouterModule.forChild(routes),ComponentesModule],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
