import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListItemComponent } from './doctors/doctor-list/doctor-list-item/doctor-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    DoctorListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
