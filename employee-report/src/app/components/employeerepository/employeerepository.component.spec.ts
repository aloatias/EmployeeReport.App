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

  it('should get employees older than 18', () => {
    // Prepare
    let expectedLegalAgeEmployees = [
      { name: 'Sepp', age: 18 },
      { name: 'Mike', age: 51 }
    ]

    // Act
    let actualLegalAgeEmployees = component.getEmployeesOverLegalAge();

    // Test
    expect(actualLegalAgeEmployees).toEqual(expectedLegalAgeEmployees);
  });

  it('should get employees sorted by name', () => {
    // Prepare
    let expectedSortedEmployees = [
      { name: 'Max', age: 17 },
      { name: 'Mike', age: 51 },
      { name: 'Nina', age: 15 },
      { name: 'Sepp', age: 18 }
    ]

    // Act
    let actualLegalAgeEmployees = component.SortEmployeesByName();

    // Test
    expect(actualLegalAgeEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get employees on capital letters', () => {
    // Prepare
    let expectedEmployeesOnCapitalLetters = [
      { name: 'MAX', age: 17 },
      { name: 'SEPP', age: 18 },
      { name: 'NINA', age: 15 },
      { name: 'MIKE', age: 51 },
    ]

    // Act
    let actualEmployeesOnCapitalLetters = component.getEmployeesOnCapitalLetters();

    // Test
    expect(actualEmployeesOnCapitalLetters).toEqual(expectedEmployeesOnCapitalLetters);
  });
});
