import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectProductsPage } from '../select-products/select-products';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  error=true;
  counterCheck = 0;
  mobileTelephony: Boolean = false;
  fixedTelephony: Boolean = false;
  mobileData: Boolean = false;
  tv: Boolean = false;
  cellphone: Boolean = false;
  internet: Boolean = false;
  productsList:Array<{id: String, text: String, success: String, plan: String}> = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productsList = []; 
    this.mobileTelephony = false;
    this.fixedTelephony = false;
    this.mobileData = false;
    this.tv = false;
    this.cellphone = false;
    this.internet = false;
  }

  validateCheck(checkedTest) {
    if(checkedTest === true){
      this.counterCheck += 1;
    }else{
      this.counterCheck -= 1;
    }
    if(this.counterCheck > 0){
      this.error = false;
    }else{
      this.error = true;
    }
  }

  goToSelectProducts(){
    if(this.fixedTelephony === true){
      this.productsList.push({id:'1',text:'Escoge los minutos locales',success : '0', plan: ''});
    }
    if(this.mobileTelephony === true){
      this.productsList.push({id:'2',text:'Escoge los minutos a celular',success : '0', plan: ''});
    }
    if(this.mobileData === true){
      this.productsList.push({id:'3',text:'Escoge los datos móviles',success : '0', plan: ''});
    }
    if(this.tv === true){
      this.productsList.push({id:'4',text:'Escoge el plan de televisión',success : '0', plan: ''});
    }
    if(this.cellphone){
      this.productsList.push({id:'5',text:'Escoge el celular',success : '0', plan: ''});
    }
    if(this.internet){
      this.productsList.push({id:'6',text:'Escoge el plan de internet',success : '0', plan: ''});
    }
    this.navCtrl.push(SelectProductsPage,{
      productsList: this.productsList
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

}
