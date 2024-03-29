import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Api } from './api';

import { MyApp } from './app.component';
import { DetailsPage } from '../pages/details/details';
import { SystemSearchPage } from '../pages/system-search/system-search';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { dashboardPage } from '../pages/dashboard/dashboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DetailsPage,
    SystemSearchPage,
    LoginPage,
    RegisterPage,
    dashboardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage,
    SystemSearchPage,
    LoginPage,
    RegisterPage,
    dashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
