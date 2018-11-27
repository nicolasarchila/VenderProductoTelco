import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsResumePage } from './products-resume';

@NgModule({
  declarations: [
    ProductsResumePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsResumePage),
  ],
})
export class ProductsResumePageModule {}
