import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];      
  @Input() doctor: Doctor = {} as Doctor;  

  constructor(private doctorsService: DoctorsService){    
    this.doctorsService.fetchDoctors().subscribe(doctors =>{      
      this.doctors = doctors;
    }, error => {
      //TODO: Notify user of the error on UI      
      console.log(error);
    });
  }  

  ngOnInit(): void {
  }

 

}
