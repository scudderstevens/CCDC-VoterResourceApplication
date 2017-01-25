import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoListPage } from '../info-list-page/info-list-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  infoListPage = InfoListPage;

  addrSearch = {
    street: '',
    city: '',
    zip: ''
  }

  constructor(
    public navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

  logForm(form) {
    console.log(form.value);
  }

  pushPage() {
    this.navCtrl.push(this.infoListPage, {
      street: this.addrSearch.street,
      city: this.addrSearch.city,
      zip: this.addrSearch.zip
    });
  }

}
