import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-candidate-detail-page',
  templateUrl: 'candidate-detail-page.html'
})

export class CandidateDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Candidate Detail Page');
  }

}
