import { Component, OnInit } from '@angular/core';
import { PetMateService } from './petmate.service';
import { PetFinder } from './petfinderapi/petfinder';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [PetMateService]
})
export class AppComponent {
  pet: string;
  private url1 = 'http://petmate-lifeone.rhcloud.com/rest/petmate-api/getpet?id=34668953';
  constructor(
    private petMateService: PetMateService, private http: Http
    // private router: Router
  ) { }
  getPet() { 
    this.petMateService.getPet().subscribe(
      data => this.pet = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished'))
  }

}
