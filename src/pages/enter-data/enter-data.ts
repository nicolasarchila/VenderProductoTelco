import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController) {
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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Términos y condiciones',
      subTitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      buttons: ['OK']
    });
    alert.present();
  }

}
