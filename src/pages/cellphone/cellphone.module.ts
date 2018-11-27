import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CellphonePage } from './cellphone';

@NgModule({
  declarations: [
    CellphonePage,
  ],
  imports: [
    IonicPageModule.forChild(CellphonePage),
  ],
})
export class CellphonePageModule {}
