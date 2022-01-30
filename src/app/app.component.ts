import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import { Doctor } from './models/doctor.model';
import { DoctorsService } from './services/doctors.service';
import { NavigationTabs } from './models/enums';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})

export class AppComponent {  
  title: string = 'better-doctors';
  selectedDoctor: Doctor = {} as Doctor;
  selectedTab: NavigationTabs = NavigationTabs.todo;
  
  //expose the enum so you can access it in html TODO: Think about a way to make enums globally with no explicit delcaring
  navigationTabs = NavigationTabs;

  constructor(private doctorService: DoctorsService) { }

  ngOnInit(){
    this.doctorService.doctorSelected.subscribe(
      (doctor: Doctor) => {
        this.selectedDoctor = doctor;
      }
    )
  }

  onTabNavigate(tab: NavigationTabs) {    
    this.selectedTab = tab;
  }
}


