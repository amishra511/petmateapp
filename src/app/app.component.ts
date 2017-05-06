import { Component, OnInit } from '@angular/core';
import { PetMateService } from './petmate.service';
import { PetFinder } from './petfinderapi/petfinder';
import { RootObject } from './petfinderapi/rootobject';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JsonConvert } from "json2typescript";
import '../assets/js/location.js';

declare var myExtObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PetMateService]
})
export class AppComponent {
  pet: string;
  tempObj: object;
  root: RootObject;
  private url1 = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953';
  private testUrl ='http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
  constructor(
    private petMateService: PetMateService, private http: Http
    // private router: Router
  ) { }
  getPetObject() {  
          JsonConvert.debugMode = true; // print some debug data
    // JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.ALLOW_NULL; 
      console.log(this.pet);        
     this.root = JsonConvert.deserializeString(this.pet, RootObject);
     console.log("Pet id:t"+ this.root.petfinder.pet.id);      
  }

  getPet(){
     this.petMateService.getPet().subscribe(
      data => this.pet = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished'));
  }
 
  getPet1(){
     this.petMateService.getPet().subscribe(
      data => {this.pet = JSON.stringify(data);
        console.log(this.pet);
        this.root = JsonConvert.deserializeString(this.pet, RootObject);
        console.log("Pet id:t"+ this.root.petfinder.pet.id);      
      },
      error => alert(error),
      () => console.log('Finished'));
  }

  callGeolocate(event: any){
      myExtObject.geolocate();;
  }

  
  //  getPet1(){

  //   this.petMateService.getPet().subscribe(
  //     data => this.root = JsonConvert.deserializeObject(JSON.stringify(data),RootObject),
  //     error => alert(error),
  //     () => console.log('Finished'));
  //   //this.getPetObject();
  // }


}
