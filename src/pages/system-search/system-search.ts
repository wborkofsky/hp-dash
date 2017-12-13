import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details' ;
import { Api } from '../../app/api';

@Component({
  templateUrl: 'system-search.html'
})
export class SystemSearchPage {
  items = [];
  filteredItems = [];
  pushPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.api.listSystems((dataArg) => this.initializeItems(dataArg));
	  this.filteredItems = this.items;
	  this.pushPage = DetailsPage;
  }

  initializeItems(dataArg) {
    for (var i = 0; i < dataArg.length; i++){
      this.items.push([dataArg[i].systemName, false, i, dataArg[i].id])
    }
  }

  getItems(ev) {
	  this.filteredItems = this.items;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredItems = this.filteredItems.filter((item) => {
        return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  updateItem(index){
	  this.items[index][1] = !this.items[index][1];
  }
  switchToDetails(id){
    //
	  this.navCtrl.push(DetailsPage, {systemID: id});
  }
}
