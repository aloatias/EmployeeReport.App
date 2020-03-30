import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerepositoryComponent } from './employeerepository.component';

describe('EmployeerepositoryComponent', () => {
  let component: EmployeerepositoryComponent;
  let fixture: ComponentFixture<EmployeerepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
