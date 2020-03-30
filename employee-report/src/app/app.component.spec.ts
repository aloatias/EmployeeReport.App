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
    let actualLegalAgeEmployees = employees.filter(e => e.age >= 18);

    // Test
    expect(expectedLegalAgeEmployees).toEqual(actualLegalAgeEmployees);
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
    let actualLegalAgeEmployees = employees.sort(compareElement);

    // Test
    expect(expectedSortedEmployees).toEqual(actualLegalAgeEmployees);
  });

  function compareElement(a, b) {
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
});
