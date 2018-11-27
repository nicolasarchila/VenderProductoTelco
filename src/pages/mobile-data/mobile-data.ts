import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectProductsPage } from '../select-products/select-products';

/**
 * Generated class for the MobileDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobile-data',
  templateUrl: 'mobile-data.html',
})
export class MobileDataPage {

  productsList:Array<{id: String, text: String, success: String, plan: '', description: ''}> = []; 
  id: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productsList = navParams.data.productsList;
    this.id = navParams.data.id;
  }

  goToProducts(option, description){
    this.productsList.forEach(element => {
      if(this.id == element.id){
        element.success = '1'
        element.plan = option
        element.description = description
      }
    });
    this.navCtrl.push(SelectProductsPage,{
      productsList: this.productsList
    });
  }

}
