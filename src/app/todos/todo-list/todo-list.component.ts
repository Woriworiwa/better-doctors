import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { ToDo } from 'src/app/models/todo.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() doctor: Doctor = {} as Doctor;
  todos: ToDo[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.doctorSelected.subscribe(doctor => {      
      this.doctor = doctor;
      this.doctorsService.fetchTasks(doctor.id).subscribe(todos => {
        this.todos = todos;
      })
    })
  }

}
