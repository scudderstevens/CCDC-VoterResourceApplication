import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CivicInfoProvider } from '../../providers/civic-info-provider';
import { Observable } from 'rxjs/Observable';
import { CandidateDetailPage } from '../candidate-detail-page/candidate-detail-page';

@Component({
  selector: 'page-info-list-page',
  templateUrl: 'info-list-page.html'
})

export class InfoListPage {

  addr = {
    street: '',
    city: '',
    state: '',
    zip: ''
  }
  display
  userdata
  searchString
  // candidateDetail = CandidateDetailPage; // future addition

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private info: CivicInfoProvider ) {
      this.addr.street = this.navParams.get('street');
      this.addr.city = this.navParams.get('city');
      this.addr.state = 'PA';
      this.addr.zip = this.navParams.get('zip');
      //this.display = "Democratic"; // uncomment for development
      this.display = "Democratic Party"; // future addition display option
      this.searchString = this.addr.street + ' ' +
                          this.addr.city + ' ' +
                          this.addr.state + ' ' +
                          this.addr.zip;
      this.info.getCivicInfo(this.searchString).subscribe(res => {
        console.log(res)
        this.userdata = res
      });
    }

  ionViewDidLoad() {
    console.log('Hello Civic Info Results Page');
    console.log('Search String ', this.searchString);
  }

}
