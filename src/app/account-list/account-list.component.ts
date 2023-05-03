// import { CustomerAccountService } from '../customer-account-service.service';
// import { CustomerAccount } from '../CustomersAccount';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerAccount } from '../CustomersAccount';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-account-list',
//   templateUrl: './account-list.component.html',
//   styleUrls: ['./account-list.component.css']
// })

// export class AccountListComponent {
//   rows: CustomerAccount[] = [];
  
//   constructor(private dataService: CustomerAccountService) {
//     console.log(1)
//   }

// }



@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit, OnDestroy {
  rows: CustomerAccount[] = [];
  private subscription: Subscription | undefined;
  
  constructor() {
    console.log(1)
  }

  ngOnInit(): void {
    this.fetchAccounts();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private fetchAccounts(): void {
   
  }
}