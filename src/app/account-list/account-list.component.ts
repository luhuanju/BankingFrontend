
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerAccountService } from '../customer-account-service.service';
import { CustomerAccount } from '../CustomersAccount';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  rows: CustomerAccount[] = [];
  constructor(private dataService: CustomerAccountService) {}
  ngOnInit(): void {
    this.dataService.getAccountList().subscribe((result) => {
      console.log(result)
      this.rows = result;
    });
  }
}