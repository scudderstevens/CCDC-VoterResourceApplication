import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CivicInfoProvider {

  private BASE_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo'
  private API_KEY = 'API-KEY-HERE'

  constructor( private http: Http ) {
    console.log('Hello CivicInfoProvider Provider');
  }

  getCivicInfo(_searchString) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('address', _searchString ); // comment for development
    // params.set('address', '911+Merrybell+Lane+Kennett+Square+PA+19348');
    params.set('electionId', '5000'); // comment for development
    // params.set('electionId', '2000');

    return this.http.get(this.BASE_URL, { search: params })
      .map(res => res.json());
  }

}
