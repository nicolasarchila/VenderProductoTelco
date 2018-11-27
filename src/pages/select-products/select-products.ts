import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { MobilePhonePage } from '../mobile-phone/mobile-phone';
import { FixedPhonePage } from '../fixed-phone/fixed-phone';
import { MobileDataPage } from '../mobile-data/mobile-data';
import { TelevisionPlanPage } from '../television-plan/television-plan';
import { CellphonePage } from '../cellphone/cellphone';
import { InternetPage } from '../internet/internet';
import { HomePage } from '../home/home';

/**
 * Generated class for the SelectProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-products',
  templateUrl: 'select-products.html',
})
export class SelectProductsPage {

  productsList:Array<{id: String, text: String, success: String, plan: String, description: String}> = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productsList = navParams.data.productsList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectProductsPage');
  }

  goToLogin(){
    this.navCtrl.push(HomePage,{
      productsList: this.productsList
    }); 
  }

  itemSelected(item){
    switch(item.id) { 
      case '1': { 
        this.navCtrl.push(FixedPhonePage,{
          productsList: this.productsList,
          id: item.id
        });
        break; 
      } 
      case '2': { 
        this.navCtrl.push(MobilePhonePage,{
          productsList: this.productsList,
          id: item.id
        });
        break; 
      } 
      case '3': { 
        this.navCtrl.push(MobileDataPage,{
          productsList: this.productsList,
          id: item.id
        }); 
        break; 
      } 
      case '4': { 
        this.navCtrl.push(TelevisionPlanPage,{
          productsList: this.productsList,
          id: item.id
        }); 
        break; 
      } 
      case '5': { 
        this.navCtrl.push(CellphonePage,{
          productsList: this.productsList,
          id: item.id
        }); 
        break; 
      } 
      case '6': { 
        this.navCtrl.push(InternetPage,{
          productsList: this.productsList,
          id: item.id
        }); 
        break; 
      } 
      default: { 
        
        break; 
      } 
   } 
  }

}
