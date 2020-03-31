import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeerepositoryComponent } from './components/employeerepository/employeerepository.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeerepositoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
