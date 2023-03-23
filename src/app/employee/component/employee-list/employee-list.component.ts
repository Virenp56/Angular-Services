import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  viewProviders: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  public data: any;
  public header: any;
  public localData: any;
  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.data = this.empService.data;
    this.header = Object.keys(this.data[0])


  }
  delete(data: any) { this.empService.delete(data) }
}
