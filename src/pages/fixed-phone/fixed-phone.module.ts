import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FixedPhonePage } from './fixed-phone';

@NgModule({
  declarations: [
    FixedPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(FixedPhonePage),
  ],
})
export class FixedPhonePageModule {}
