import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { EnterDataPage } from '../enter-data/enter-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  password: string;
  productsList:Array<{id: String, text: String, success: String, plan: String, description: String}> = []; 

  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController) {
    this.productsList = navParams.data.productsList;
  }

  loginUser(){
    if( this.user == 'jorge' && this.password == 'jorge')
        this.navCtrl.push(QuotePage);
    else 
      this.showAlert();
  }

  goToEnterData(){
    this.navCtrl.push(EnterDataPage,{
      productsList: this.productsList
    }); 
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });
    alert.present();
  }

}
