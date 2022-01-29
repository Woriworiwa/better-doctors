import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListItemComponent } from './doctors/doctor-list/doctor-list-item/doctor-list-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoListItemComponent } from './todos/todo-list/todo-list-item/todo-list-item.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TabsComponent } from './navigation/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorListItemComponent,
    DoctorDetailsComponent,    
    TodoListComponent,
    TodoListItemComponent,
    HeaderComponent,
    TabsComponent
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
