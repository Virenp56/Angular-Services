import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  viewProviders: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {
  reactiveForm!: FormGroup;
  public localData: any
  constructor(private empService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'id': new FormControl(this.empService.length + 1),
      'lastname': new FormControl(null),
      'firstname': new FormControl(null),
      'technology': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null),
    })
  }
  onSubmit() {
    this.empService.add();
    this.localData = localStorage.setItem('empData', JSON.stringify(this.reactiveForm.value));
    // console.log(JSON.parse(this.localData));

    // console.log(this.reactiveForm.value);
    this.router.navigate(['/employee/employee-list']);
  }
}
