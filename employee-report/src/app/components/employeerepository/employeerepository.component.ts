import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeerepository',
  templateUrl: './employeerepository.component.html',
  styleUrls: ['./employeerepository.component.css']
})
export class EmployeerepositoryComponent implements OnInit {
  private _employees = [];

  constructor() {
    this._employees = [
      { name: 'Max', age: 17 },
      { name: 'Sepp', age: 18 },
      { name: 'Nina', age: 15 },
      { name: 'Mike', age: 51 },
    ];
  }

  ngOnInit(): void {  
  }

  compareElement(a, b): number {
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

  getEmployeesOnCapitalLetters() {
    let employeesCapitalLetters = [];

    this._employees.forEach(e => {
      let currentEmployee = e;
      currentEmployee.name = e.name.toUpperCase();

      employeesCapitalLetters.push(currentEmployee);
    });

    return employeesCapitalLetters;
  }

  getEmployeesOverLegalAge() {
    return this._employees.filter(e => e.age >= 18);
  }

  SortEmployeesByName() {
    return this._employees.sort(this.compareElement)
  }
}
