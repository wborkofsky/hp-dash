import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Api } from './api';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { SystemSearchPage } from '../pages/system-search/system-search';

=======
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { dashboardPage } from '../pages/dashboard/dashboard';
>>>>>>> master
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    SystemSearchPage
=======
    LoginPage,
    RegisterPage,
    dashboardPage
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    SystemSearchPage
=======
    LoginPage,
    RegisterPage,
    dashboardPage
>>>>>>> master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
