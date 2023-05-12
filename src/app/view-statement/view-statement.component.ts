import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css'],
})

export class ViewStatementComponent {
  currentPage: number = 1;
  pageSize: number = 3;
  totalPages: number;

  balance: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService
  ) {}

  // set <select> accountList
  choice: number;
  customerId = this.userService.getCurrentUser()['customerId'];
  accountList: any[];
  showAccount: any;
  // set transaction list table
  transactionList: any;

  // get accountList
  ngOnInit() {
    const getAccurl = `http://localhost:8080/api/customer/${this.customerId}/acocunt`;
    this.http.get<any[]>(getAccurl).subscribe(
      (data) => {
        this.accountList = data;
        console.log(
          'this is accounts:',
          this.accountList,
          'this is transaction',
          this.accountList[-1].transaction
        );
      },
      (error) => {
        console.log('Error occurred while fetching user data:', error);
      }
    );
  }

  submitAccNo() {
    console.log('choice', this.choice);

    const getTransurl = `http://localhost:8080/api/customer/${this.customerId}/account/${this.choice}`;
    this.http.get<any[]>(getTransurl).subscribe((data) => {
      this.showAccount = data;
      console.log('***choice', this.choice);
      console.log('this.showAccount', this.showAccount);
      this.transactionList = this.showAccount.transaction;
      this.balance = this.showAccount.accountBalance;
      console.log('****', this.transactionList);
    });
  }

  getAccNo() {
    return Array.from({ length: this.accountList.length }, (_, index) => index);
  }

  // get transaction list
  getDisplayedTrans() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    console.log('This is **trans: ', this.transactionList);
    return this.transactionList.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number) {
    this.totalPages = Math.ceil(this.transactionList.length / this.pageSize);

    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
}
