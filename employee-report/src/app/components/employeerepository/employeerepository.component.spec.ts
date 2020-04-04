import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeerepositoryComponent } from './employeerepository.component';
import { EmployeeFilters } from './classes/EmployeeFilters';

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

  it('should get employees who are at least 18', () => {
    // Prepare
    let expectedLegalAgeEmployees = [
      { name: 'Sepp', age: 18 },
      { name: 'Mike', age: 51 }
    ];

    let employeesFilters = new EmployeeFilters(true, false, "none")

    // Act
    let actualLegalAgeEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualLegalAgeEmployees).toEqual(expectedLegalAgeEmployees);
  });

  it('should get employees sorted by name asc', () => {
    // Prepare
    let expectedSortedEmployees = [
      { name: 'Max', age: 17 },
      { name: 'Mike', age: 51 },
      { name: 'Nina', age: 15 },
      { name: 'Sepp', age: 18 } 
    ];

    let employeesFilters = new EmployeeFilters(false, false, "asc");

    // Act
    let actualSortedEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualSortedEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get employees on capital letters', () => {
    // Prepare
    let expectedEmployeesOnCapitalLetters = [
      { name: 'MAX', age: 17 },
      { name: 'SEPP', age: 18 },
      { name: 'NINA', age: 15 },
      { name: 'MIKE', age: 51 },
    ];

    let employeesFilters = new EmployeeFilters(false, true, "none")

    // Act
    let actualEmployeesOnCapitalLetters = component.getEmployees(employeesFilters);

    // Test
    expect(actualEmployeesOnCapitalLetters).toEqual(expectedEmployeesOnCapitalLetters);
  });

  it('should get employees sorted by name desc', () => {
    // Prepare
    let expectedSortedEmployees = [
      { name: 'Sepp', age: 18 },
      { name: 'Nina', age: 15 },
      { name: 'Mike', age: 51 },
      { name: 'Max', age: 17 }
    ];

    let employeesFilters = new EmployeeFilters(false, false, "desc");

    // Act
    let actualSortedEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualSortedEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get capital name employees sorted by name desc', () => {
    // Prepare
    let expectedSortedEmployees = [
      { name: 'SEPP', age: 18 },
      { name: 'NINA', age: 15 },
      { name: 'MIKE', age: 51 },
      { name: 'MAX', age: 17 }
    ];

    let employeesFilters = new EmployeeFilters(false, true, "desc");

    // Act
    let actualSortedEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualSortedEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get capital name employees sorted by name asc', () => {
    // Prepare
    let expectedSortedEmployees = [
      { name: 'MAX', age: 17 },
      { name: 'MIKE', age: 51 },
      { name: 'NINA', age: 15 },
      { name: 'SEPP', age: 18 } 
    ];

    let employeesFilters = new EmployeeFilters(false, true, "asc");

    // Act
    let actualSortedEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualSortedEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get capital name employees who are at least 18', () => {
    // Prepare
    let expectedLegalAgeEmployees = [
      { name: 'SEPP', age: 18 },
      { name: 'MIKE', age: 51 }
    ];

    let employeesFilters = new EmployeeFilters(true, true, "none")

    // Act
    let actualLegalAgeEmployees = component.getEmployees(employeesFilters);

    // Test
    expect(actualLegalAgeEmployees).toEqual(expectedLegalAgeEmployees);
  });
});
