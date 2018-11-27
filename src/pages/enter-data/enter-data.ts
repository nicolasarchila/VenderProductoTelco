import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsResumePage } from '../products-resume/products-resume';

/**
 * Generated class for the EnterDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-data',
  templateUrl: 'enter-data.html',
})
export class EnterDataPage {

  error: Boolean = true;
  email: String = '';
  name: String = '';
  lastName: String = '';
  identification: String = '';
  telephone: String = '';
  address: String = '';
  salary: String = '';

  productsList:Array<{id: String, text: String, success: String, plan: String, description: String}> = []; 

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.productsList = navParams.data.productsList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterDataPage');
  }

  goToProductsResume(){
    this.navCtrl.push(ProductsResumePage,{
      productsList: this.productsList
    });
  }

  validateDate(){
    if(this.email != '' && this.name != '' && this.lastName != '' && this.identification != '' 
    && this.telephone != '' && this.address != '' && this.salary != ''){
      this.error = false;
    }

  }

}
