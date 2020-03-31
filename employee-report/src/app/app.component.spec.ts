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
});
