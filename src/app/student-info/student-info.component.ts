import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  template: `
    <div class="row">
      <div class="col-sm-3">
        <!-- display student image here -->
        <!-- Add space for student image here -->
        <img src="assets/image.jpg" alt="Student Image">
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{ studentName }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <p>Email: {{ studentEmail }}</p>
            <p>Phone Number: {{ studentPhone }}</p>
          </div>
          <div class="col-sm-6">
            <p>Humber ID: {{ studentHumberId }}</p>
            <p>Additional ID: {{ studentAdditionalId }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <p>Term: {{ studentTerm }}</p>
          </div>
          <div class="col-sm-2">
            <p>Program : {{ studentProgramCode }}</p>
          </div>
          <div class="col-sm-2">
            <p>Program Name: {{ studentProgramName }}</p>
          </div>
          <div class="col-sm-2git">
            <p>Status: {{ studentStatus }}</p>
          </div>
          <div class="col-sm-2">
            <p>Standing: {{ studentStanding }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StudentInfoComponent implements OnInit {

  studentName = 'Rahul Soni';
  studentEmail = 'johndoe@example.com';
  studentPhone = '555-555-1212';
  studentHumberId = 'H000000000';
  studentAdditionalId = 'A000000000';
  studentTerm = 'Fall 2021';
  studentProgramCode = 'ABC123';
  studentProgramName = 'CSE';
  studentStatus = 'Active';
  studentStanding = 'Good';

  constructor() { }

  ngOnInit(): void {
  }

}
