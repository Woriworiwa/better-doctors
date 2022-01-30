import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListItemComponent } from './doctor-list-item.component';
import { DoctorsService } from '../../../services/doctors.service';

export class DoctorServiceMock {}

describe('DoctorListItemComponent', () => {
  let component: DoctorListItemComponent;
  let fixture: ComponentFixture<DoctorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorListItemComponent ],
      providers: [
        {provide: DoctorsService, useClass: DoctorServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
