import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {JsonpModule, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PetMateService }    from './petmate.service';


@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
    //RouterModule.forRoot(ROUTES)
  ],
  providers: [PetMateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
