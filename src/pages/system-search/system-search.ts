import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details' ;

@Component({
  templateUrl: 'system-search.html'
})
export class SystemSearchPage {
  items;
  filteredItems;
  pushPage;

  constructor() {
    this.initializeItems();
	this.filteredItems = this.items;
	this.pushPage = DetailsPage;
  }

  initializeItems() {
    this.items = [
      ['System1', true, 0],
      ['System2', true, 1],
      ['System3', false, 2],
      ['System4', false, 3],
      ['System5', true, 4],
      ['System6', true, 5],
      ['System7', false, 6],
      ['System8', true, 7],
      ['System9', false, 8],
      ['System10', false, 9],
      ['System11', true, 10],
      ['System12', false, 11],
      ['System13', false, 12],
      ['System14', false, 13],
      ['System15', true, 14],
      ['System16', true, 15],
      ['System17', true, 16],
      ['System18', false, 17],
      ['System19', true, 18],
      ['System20', true, 19]
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
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
  switchToDetails(){
	   this.nav.push(DetailsPage);
  }
}
