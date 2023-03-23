import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public data = [
    { 'id': 1, 'lastname': 'Patel', 'firstname': 'Viren', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 2, 'lastname': 'Tandel', 'firstname': 'Karan', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 3, 'lastname': 'Patel', 'firstname': 'Sweta', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 4, 'lastname': 'Patel', 'firstname': 'Maahi', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 5, 'lastname': 'Bulsara', 'firstname': 'Diya', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 6, 'lastname': 'Pandya', 'firstname': 'Nupur', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' },
    { 'id': 7, 'lastname': 'Patel', 'firstname': 'Yashvi', 'technology': 'front-end', 'email': 'viren4722@gmail.com', 'address': 'valsad' }
  ];
  public length = this.data.length;
  public obj: any
  public localData: any
  public newObj: any
  delete(id: any) {
    this.obj = this.data.find(element => element.id == id)
    this.data.splice(this.data.indexOf(this.obj), 1)
  }
  add() {
  }
}
