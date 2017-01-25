import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class MyApp {
  root = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

  }
}
