import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent {

  users: User[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  
  textInput: string;
  balance: number = 10000000;
  
  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {

    this.users = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '123-456-7890' },
      { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '123-456-7890' },
      { id: 4, name: 'Alice Davis', email: 'alice.davis@example.com', phone: '123-456-7890' },
      { id: 5, name: 'Tom Wilson', email: 'tom.wilson@example.com', phone: '123-456-7890' },
      { id: 6, name: 'Mary Brown', email: 'mary.brown@example.com', phone: '123-456-7890' },
      { id: 7, name: 'Alice Brown', email: 'mary.brown@example.com', phone: '123-456-7890' },
      { id: 8, name: 'Jane Bob', email: 'mary.brown@example.com', phone: '123-456-7890' },
      { id: 9, name: 'Bob Smith', email: 'mary.brown@example.com', phone: '123-456-7890' }
    ];

    this.currentPage = 1;
    this.pageSize = 3;
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
  }

  // set <select> accountList
  choice: string;
  customerId = this.userService.getCurrentUser()['customerId']
  accountList: any[];

  // get accountList
  ngOnInit() {
    const getAccurl = `http://localhost:8080/api/customer/${this.customerId}/acocunt`;
    this.http.get<any[]>(getAccurl).subscribe(
      (data) => {
        this.accountList = data;
        console.log('this is accounts:', this.accountList);
      },
      (error) => {
        console.log('Error occurred while fetching user data:', error);
      }
    );
  }

  submitAccNo(){
    console.log("choice", this.choice)
  }

  getAccNo(){
    return Array.from({ length: this.accountList.length }, (_, index) => index);
  }
  
  getDisplayedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.users.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

}