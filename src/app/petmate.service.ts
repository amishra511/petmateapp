import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { PetFinder } from './petfinderapi/petfinder';


import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

//import {Pet} from './pet';
//import {RootObject} from './rootObject';

@Injectable()
export class PetMateService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiKey = 'af5b5f431f539fffcaf29f89b2081577';
  private apiSecret = 'c300fd8006ebeb491e8a8407d209ef09';
  private petMateUrl = 'http://api.petfinder.com/';  // URL to web api
  private formatParam = 'format=json';
  private methodRandomPet= 'pet.get';
  private result ='';
private url1 = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953';
private url = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet';

  constructor(private http: Http, private jsonp: Jsonp) {
  
   }

      getPet() {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

        return this.http.get('https://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953')
        .map(res => res.json());

    }

    getLocation(){
      // return this.http.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&libraries=places')
      // .map(res => res.json());
      return this.jsonp.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&libraries=places')
      .map(res => res.json());

    }

    // getPet(id:number): Promise<PetFinder> { 
    //     const fullUrl = `${this.url}?id=${id}`;
    //     // console.log(fullUrl);
    // return this.http.get(fullUrl)
    //            .toPromise()
    //            .then(response => response.json().data as PetFinder)
    //            .catch(this.handleError);   



                      
  // }





  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }


}