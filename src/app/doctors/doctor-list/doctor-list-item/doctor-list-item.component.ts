import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-list-item',
  templateUrl: './doctor-list-item.component.html',
  styleUrls: ['./doctor-list-item.component.scss']
})

export class DoctorListItemComponent implements OnInit {
  @Input() doctor: Doctor = {} as Doctor;

  // Used to know which list item will be set as active
  @Input() selectedDoctor: Doctor = {} as Doctor;

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
  }

  onSelected() {    
    this.doctorsService.doctorSelected.emit(this.doctor);
  }
}
