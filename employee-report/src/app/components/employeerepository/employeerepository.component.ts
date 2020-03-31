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
    this._employees = this._employees.filter(
      e => employeesFilters.IsOverLegalAge == true ?
       e.age >= 18 : 
       true
    );

    if (employeesFilters.CapitalizeNames)
    {
      this._employees.forEach(e => {
        e.name = e.name.toUpperCase();
      });
    }

    if (employeesFilters.Sort !== "none") {
      if (employeesFilters.Sort === "asc") {
        this._employees.sort(this.compareElementAsc);
      } else {
        this._employees.sort(this.compareElementDesc);
      }
    }

    return this._employees;
  }
}
