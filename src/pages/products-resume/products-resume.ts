import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinishPage } from '../finish/finish';

/**
 * Generated class for the ProductsResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-resume',
  templateUrl: 'products-resume.html',
})
export class ProductsResumePage {

  productsList:Array<{id: String, text: String, success: String, plan: String, description: String}> = []; 

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.productsList = navParams.data.productsList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsResumePage');
  }

  goToFinishPage(){
    this.navCtrl.push(FinishPage,{
      
    });
  }

}
