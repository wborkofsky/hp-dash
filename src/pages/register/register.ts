import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Api } from '../../app/api';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = {user: {username: '', password: ''}}

  constructor(public navCtrl: NavController, public api: Api, public alertCtrl: AlertController) {}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'You have successfully registered as ' + this.user.user.username + '.',
      buttons: ['OK']
    });
    alert.present();
  }

  register(form) {
    this.api.register(this.user, (data) => this.showAlert());
  }

}
