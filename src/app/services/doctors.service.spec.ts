// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { mockDoctorsArray } from '../../mocks/Doctor';
import { mockTodoArray } from '../../mocks/todo';
import { DoctorsService } from './doctors.service';

describe('DoctorService', () => {
    
    let service: DoctorsService;
    let httpTestingController: HttpTestingController;
    let url: string = 'https://jsonplaceholder.typicode.com';
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
        
      service = TestBed.inject(DoctorsService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should call fetchDoctors and return an array of doctors', () => {
        service.fetchDoctors().subscribe((res) => {
            expect(res).toEqual(mockDoctorsArray);
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${url}/users`,
        });

        req.flush(mockDoctorsArray);
    }) 

    it('should call fetchTasks for a specific doctor and return and array of todos', () => {
        let doctorId = 1;
        service.fetchTasks(doctorId).subscribe((res) => {
            expect(res).toEqual(mockTodoArray);
        });

        let req = httpTestingController.expectOne({
            method: 'GET',
            url: `${url}/users/${doctorId}/todos`,
        });

        req.flush(mockTodoArray);        
    });
  });

