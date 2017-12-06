import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetailsPage } from '../pages/details/details';
import { SystemSearchPage } from '../pages/system-search/system-search';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { dashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = dashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search', component: HomePage },
      { title: 'System-Search', component: SystemSearchPage },
      { title: 'Dashlet Viewer', component: ListPage},
      { title: 'Account Settings', component: ListPage},
      { title: 'Details Page', component: DetailsPage},
      { title: 'Return', component: ListPage},
      { title: 'Dashboard', component: dashboardPage},
      { title: 'Search', component: SystemSearchPage },
      { title: 'Details', component: DetailsPage},
      { title: 'Login', component: LoginPage},
      { title: 'Register', component: RegisterPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
