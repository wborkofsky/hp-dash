import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'system-search.html'
})
export class SystemSearchPage {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'System1',
      'System2',
      'System3',
      'System4',
      'System5',
      'System6',
      'System7',
      'System8',
      'System9',
      'System10',
      'System11',
      'System12',
      'System13',
      'System14',
      'System15',
      'System16',
      'System17',
      'System18',
      'System19',
      'System20'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
