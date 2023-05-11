import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
})
export class TransferMoneyComponent {
  constructor(private http: HttpClient, private router: Router) {}

  toAccount: string;
  amount: number;
  reason: string;

  // accountList
  accountList: any[] = [
    { accNo: 1, Balance: '1000', accType: 'SB' },
    { accNo: 2, Balance: '2000', accType: 'CA' },
    { accNo: 3, Balance: '3000', accType: 'SB' },
  ];

  selectedAccount: any;

  submit() {
    if (this.selectedAccount) {
      console.log(
        'selectedAccount : ',
        this.selectedAccount,
        'will transfer money to: ',
        this.toAccount
      );
    } else {
      console.log('no account selected!');
    }
  }

}
