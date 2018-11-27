import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileDataPage } from './mobile-data';

@NgModule({
  declarations: [
    MobileDataPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileDataPage),
  ],
})
export class MobileDataPageModule {}
