import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor.model";
import { map } from 'rxjs/operators'


@Injectable({ providedIn: 'root' })
export class DoctorsService {
  doctorSelected = new EventEmitter<Doctor>();

  constructor(private http: HttpClient) { }

  fetchDoctors() {
    return this.http.get<Doctor[]>('https://jsonplaceholder.typicode.com/users')
  }
}