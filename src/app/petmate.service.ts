import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { PetFinder } from './petfinderapi/petfinder';
import { HereRootObject } from './heremaps/rootobject';
import { JsonConvert } from "json2typescript";
import { Suggestion } from './heremaps/suggestion';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

//import {Pet} from './pet';
//import {RootObject} from './rootObject';

@Injectable()
export class PetMateService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiKey = 'af5b5f431f539fffcaf29f89b2081577';
  private apiSecret = 'c300fd8006ebeb491e8a8407d209ef09';
  private petMateUrl = 'http://api.petfinder.com/';  // URL to web api
  private formatParam = 'format=json';
  private methodRandomPet = 'pet.get';
  private result = '';
  private url1 = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953';
  private url = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet';

  //  private here: string;
  //   private addResult:string[];

  constructor(private http: Http, private jsonp: Jsonp) {

  }

  getPet() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this.http.get('https://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953&callback=initAutocomplete')
      .map(res => res.json());

  }

  getLocation(term: string) {
    let params = new URLSearchParams();
    params.set('query', term);
    params.set('country', 'USA');
    params.set('app_id', 'tYyzuJI4FZYE9EKtEphh');
    params.set('app_code', 'GdhJPNMnuLQiDMw-FRh0gw');

    return this.http.get('https://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json', { search: params })    
    .map(res => {
       let hereRoot:HereRootObject = JsonConvert.deserializeString(JSON.stringify( res.json()), HereRootObject);
       return hereRoot.suggestions;
    });

  }

//Not used. Ned to check why it is not working when used from observable.map in getLocation
  extractLocation(res:Response){
      let hereRoot:HereRootObject = JsonConvert.deserializeString(JSON.stringify( res.json()), HereRootObject);
       return hereRoot.suggestions;
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }


}