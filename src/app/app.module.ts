import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { SafTypeSelectionComponent } from './saf-type-selection/saf-type-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    CourseManagementComponent,
    SafTypeSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }