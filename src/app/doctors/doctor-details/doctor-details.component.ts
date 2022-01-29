import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: Doctor = {} as Doctor;

  constructor() { }

  ngOnInit(): void {    
  }

}
