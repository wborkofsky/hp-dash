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
      'dashlet1',
      'dashlet2',
      'dashlet3',
      'dashlet4',
      'dashlet5',
      'dashlet6',
      'dashlet7',
      'dashlet8',
      'dashlet9',
      'dashlet10',
      'dashlet11',
      'dashlet12',
      'dashlet13',
      'dashlet14',
      'dashlet15',
      'dashlet16',
      'dashlet17',
      'dashlet18',
      'dashlet19',
      'dashlet20'
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
