import { Component, OnInit, NgZone } from '@angular/core';
import { PetMateService } from './petmate.service';
import { PetFinder } from './petfinderapi/petfinder';
import { RootObject } from './petfinderapi/rootobject';
import { Headers, Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { JsonConvert } from "json2typescript";
import { Observable } from 'rxjs/Observable';
import { Suggestion } from './heremaps/suggestion';

/////////////////////////////////////////////////////////
////These are additional import for smart wikipedia example emulation
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
//////////////////////////////////////////

// import '../assets/js/google-locations.js';
// import { AgmCoreModule, AgmMap, MapsAPILoader} from '@agm/core';

// declare var locationObject: any;
// declare var google:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PetMateService]
})
export class AppComponent implements OnInit {
  pet: string;
  tempObj: object;
  root: RootObject;
  
  items:Observable<Suggestion[]>;
 
  private url1 = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953';
  private testUrl = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
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
    console.log("Pet id:t" + this.root.petfinder.pet.id);
  }

  getPet() {
    this.petMateService.getPet().subscribe(
      data => this.pet = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished'));
  }

  getPet1() {
    this.petMateService.getPet().subscribe(
      data => {
      this.pet = JSON.stringify(data);
        console.log(this.pet);
        this.root = JsonConvert.deserializeString(this.pet, RootObject);
        console.log("Pet id:t" + this.root.petfinder.pet.id);
      },
      error => alert(error),
      () => console.log('Finished'));
  }

  getLocation(term: string) {
    //Do not subscribe to the observable, directly use it otherwise 'async' will give error in html
    this.items = this.petMateService.getLocation(term);
  }

//Changes based on smart wikipedia example, in order to make data-list in html work for autosuggest
private searchTermStream = new Subject<string>();
  getLocation1(term:string){
      this.searchTermStream.next(term); 
  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.petMateService.getLocation(term));
  }


}
