import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListItemComponent } from './doctor-list-item.component';
import { DoctorsService } from '../../../services/doctors.service';
import { mockDoctor1 } from 'src/mocks/doctor';

export class DoctorServiceMock {

}

describe('DoctorListItemComponent', () => {
  let component: DoctorListItemComponent;
  let fixture: ComponentFixture<DoctorListItemComponent>;
  let serviceMock: DoctorServiceMock = new DoctorServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorListItemComponent],
      providers: [
        { provide: DoctorsService, useClass: DoctorServiceMock }
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

  it('should call onSelected() on click', () => {
    fixture = TestBed.createComponent(DoctorListItemComponent);
    component = fixture.componentInstance;
    spyOn(component, 'onSelected' as never).and.callThrough();

    const nativeElement = fixture.nativeElement;
    const anchor = nativeElement.querySelector('a');
    anchor.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.onSelected).toHaveBeenCalledTimes(1);
  });

  it('should show the doctor name', () => {          
    const fixture = TestBed.createComponent(DoctorListItemComponent);        
    component = fixture.componentInstance;    
    component.doctor = mockDoctor1;
    const compiled = fixture.nativeElement as HTMLElement;    
    
    fixture.detectChanges();    
    expect(compiled.querySelector('h4')?.innerText).toContain(mockDoctor1.name);
  });
});
