import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {JsonpModule, HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PetMateService }    from './petmate.service';
import {PetDetailComponent} from './petmi-components/pet-details.component';

const appRoutes: Routes = [
  
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path:'pet/:id',component:PetDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    HomeComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(ROUTES)
  ],
  providers: [PetMateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
