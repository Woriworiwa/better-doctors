import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor.model";
import { map } from 'rxjs/operators'
import { ToDo } from "../models/todo.model";


@Injectable({ providedIn: 'root' })
export class DoctorsService {
  doctorSelected = new EventEmitter<Doctor>();  
  url: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  fetchDoctors() {
    return this.http.get<Doctor[]>(`${this.url}/users`)
  }

  fetchTasks(doctorId: number) {
    return this.http.get<ToDo[]>(`${this.url}/users/${doctorId}/todos`)
  }
}