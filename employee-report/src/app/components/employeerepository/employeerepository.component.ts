import { Component, OnInit } from '@angular/core';
import { EmployeeFilters } from './classes/EmployeeFilters';

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

  compareElementAsc(a, b): number {
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

  compareElementDesc(a, b): number {
    let empA = a.name;
    let empB = b.name;
    
    let comparison = 0;

    if (empA < empB) {
      comparison = 1;
    } else if (empA > empB) {
      comparison = -1;
    }

    return comparison;
  }

  getEmployees(employeesFilters: EmployeeFilters) {
    let results = this._employees;
    
    results = this._employees.filter(
      e => employeesFilters.IsOverLegalAge == true ?
       e.age >= 18 : 
       true
    );

    if (employeesFilters.CapitalizeNames)
    {
      results.forEach(e => {
        e.name = e.name.toUpperCase();
      });
    }

    if (employeesFilters.Sort !== "none") {
      if (employeesFilters.Sort === "asc") {
        results.sort(this.compareElements());
      }
    }

    return results;
  }
  compareElements(): (a: any, b: any) => number {
    throw new Error("Method not implemented.");
  }
}
