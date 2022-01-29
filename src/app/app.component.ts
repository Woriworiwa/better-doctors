import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import { Doctor } from './models/doctor.model';
import { DoctorsService } from './services/doctors.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})

export class AppComponent {  
  selectedDoctor: Doctor = {} as Doctor;

  constructor(private doctorService: DoctorsService) { }

  ngOnInit(){
    this.doctorService.doctorSelected.subscribe(
      (doctor: Doctor) => {
        this.selectedDoctor = doctor;
      }
    )
  }
}


