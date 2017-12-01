import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Api } from '../../app/api';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {user: {username: '', password: ''}}

  constructor(public navCtrl: NavController, public api: Api, public alertCtrl: AlertController) {}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'You have successfully logged-in as ' + this.user.user.username + '.',
      buttons: ['OK']
    });
    alert.present();
  }

  login(form) {
    this.api.login(this.user, (data) => this.showAlert());
  }
}
