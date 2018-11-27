import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuotePage } from '../pages/quote/quote';
import { SelectProductsPage } from '../pages/select-products/select-products';
import { MobilePhonePage } from '../pages/mobile-phone/mobile-phone';
import { FixedPhonePage } from '../pages/fixed-phone/fixed-phone';
import { MobileDataPage } from '../pages/mobile-data/mobile-data';
import { TelevisionPlanPage } from '../pages/television-plan/television-plan';
import { CellphonePage } from '../pages/cellphone/cellphone';
import { InternetPage } from '../pages/internet/internet';
import { EnterDataPage } from '../pages/enter-data/enter-data';
import { ProductsResumePage } from '../pages/products-resume/products-resume';
import { FinishPage } from '../pages/finish/finish';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuotePage,
    SelectProductsPage,
    MobilePhonePage,
    FixedPhonePage,
    MobileDataPage,
    TelevisionPlanPage,
    CellphonePage,
    InternetPage,
    EnterDataPage,
    ProductsResumePage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotePage,
    SelectProductsPage,
    MobilePhonePage,
    FixedPhonePage,
    MobileDataPage,
    TelevisionPlanPage,
    CellphonePage,
    InternetPage,
    EnterDataPage,
    ProductsResumePage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
