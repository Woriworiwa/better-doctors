import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Company } from 'src/app/models/company.model';
import { Doctor } from 'src/app/models/doctor.model';
import { GeoLocation } from 'src/app/models/geo-location.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: Doctor = {} as Doctor;  

  constructor() { }

  ngOnInit(): void {    
    // TODO: Replace this code. Check if doctor is not initialized in the html.
    this.doctor.address = {} as Address;
    this.doctor.company = {} as Company;
    this.doctor.address.geo = {} as GeoLocation;
  }  
}
