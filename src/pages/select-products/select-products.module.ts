import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectProductsPage } from './select-products';

@NgModule({
  declarations: [
    SelectProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectProductsPage),
  ],
})
export class SelectProductsPageModule {}
