import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Http } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { InfoListPage } from '../pages/info-list-page/info-list-page';
import { CandidateDetailPage } from '../pages/candidate-detail-page/candidate-detail-page';
import { CivicInfoProvider } from '../providers/civic-info-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoListPage,
    CandidateDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoListPage,
    CandidateDetailPage
  ],
  providers: [
    //Http,
    CivicInfoProvider
  ]
})
export class AppModule {}
