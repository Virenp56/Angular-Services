import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public localData: any = localStorage.getItem('empData')
  public length = JSON.parse(this.localData).length
  constructor(private empService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'id': new FormControl(this.length + 1),
      'lastname': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'technology': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    })
  }
  onSubmit() {
    this.empService.add(this.reactiveForm.value);
    this.router.navigate(['/employee/employee-list']);
  }
}
