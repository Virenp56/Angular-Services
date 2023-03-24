import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public data: any[] = [
    { 'id': 1, 'lastname': 'Patel', 'firstname': 'Viren', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 2, 'lastname': 'Tandel', 'firstname': 'Karan', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 3, 'lastname': 'Patel', 'firstname': 'Sweta', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 4, 'lastname': 'Patel', 'firstname': 'Maahi', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 5, 'lastname': 'Bulsara', 'firstname': 'Diya', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 6, 'lastname': 'Pandya', 'firstname': 'Nupur', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 7, 'lastname': 'Patel', 'firstname': 'Yashvi', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' }
  ];

  public obj: any
  public localData: any
  public newObj: any


  //get Data
  getData() {
    if (localStorage.length == 0) {
      localStorage.setItem('empData', JSON.stringify(this.data))
      return this.data;
    }
    else {
      this.localData = localStorage.getItem('empData')
      return JSON.parse(this.localData)
    }

  }

  delete(id: any) {
    this.localData = localStorage.getItem('empData')
    this.newObj = JSON.parse(this.localData)

    this.obj = this.newObj.find((element: { id: any; }) => element.id == id)
    this.newObj.splice(this.newObj.indexOf(this.obj), 1)
    console.log(this.newObj);

    localStorage.setItem("empData", JSON.stringify(this.newObj))
  }

  add(data: any) {
    this.localData = localStorage.getItem('empData')
    this.newObj = JSON.parse(this.localData)
    this.newObj.push(data)
    localStorage.setItem("empData", JSON.stringify(this.newObj))

  }
}
