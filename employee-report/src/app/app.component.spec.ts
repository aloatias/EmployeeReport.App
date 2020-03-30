import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  const employees = [
    { name: 'Max', age: 17 },
    { name: 'Sepp', age: 18 },
    { name: 'Nina', age: 15 },
    { name: 'Mike', age: 51 },
  ];

  // Default test created by the framework
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Default test created by the framework
  it(`should have as title 'Employee Report'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Employee Report');
  });

  it('should get employees older than 18', () => {
    // Prepare
    let expectedLegalAgeEmployees = [
      { name: 'Sepp', age: 18 },
      { name: 'Mike', age: 51 } 
    ]

    // Act
    let actualLegalAgeEmployees = getEmployeesOverLegalAge();

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
    let actualLegalAgeEmployees = SortEmployeesByName();

    // Test
    expect(actualLegalAgeEmployees).toEqual(expectedSortedEmployees);
  });

  it('should get employees on capital letters', () => {
    // Prepare
    let expectedEmployeesOnCapitalLetters = [
      { name: 'MAX', age: 17 },
      { name: 'MIKE', age: 51 },
      { name: 'NINA', age: 15 },
      { name: 'SEPP', age: 18 },
    ]

    // Act
    let actualEmployeesOnCapitalLetters = getEmployeesOnCapitalLetters();

    // Test
    expect(actualEmployeesOnCapitalLetters).toEqual(expectedEmployeesOnCapitalLetters);
  });

  function compareElement(a, b): number {
    let empA = a.name;
    let empB = b.name;
    
    let comparison = 0;

    if (empA > empB) {
      comparison = 1;
    } else if (empA < empB) {
      comparison = -1;
    }

    return comparison;
  }

  function getEmployeesOnCapitalLetters()
  {
    let employeesCapitalLetters = [];

    employees.forEach(e => {
      let currentEmployee = e;
      currentEmployee.name = e.name.toUpperCase();

      employeesCapitalLetters.push(currentEmployee);
    });

    return employeesCapitalLetters;
  }

  function getEmployeesOverLegalAge()
  {
    return employees.filter(e => e.age >= 18);
  }

  function SortEmployeesByName() {
    return employees.sort(compareElement)
  }
});
