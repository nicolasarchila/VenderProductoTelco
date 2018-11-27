import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilePhonePage } from './mobile-phone';

@NgModule({
  declarations: [
    MobilePhonePage,
  ],
  imports: [
    IonicPageModule.forChild(MobilePhonePage),
  ],
})
export class MobilePhonePageModule {}
