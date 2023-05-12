import { Component } from '@angular/core';
import { StatementService } from './staff-statements.service';

interface Transaction {
  date: Date;
  reference: string;
  amount: number;
  transactionType: string;
}

interface Account {
  accountNo: number;
  customerName: string;
  balance: number;
  transaction: Transaction[];
}
@Component({
  selector: 'app-staff-staments',
  templateUrl: './staff-staments.component.html',
  styleUrls: ['./staff-staments.component.css']
})
export class StaffStamentsComponent {
  constructor(private service: StatementService) { }
  showForm = false;
  showTransactions = false;
  accountNumber: string;
  accounts: Account[] = []; // Assuming this is populated from the backend

  selectedAccount: Account| null = null;

  openForm() {
    this.showForm = true;
    this.showTransactions = false;
    this.accountNumber = '';
    this.selectedAccount = null;
  }

  submitForm() {
    this.service.getStatements(this.accountNumber).subscribe((res: any) => {
      this.accounts = res;
    }, error => {
      console.log(error);
      // show error message
    });

    const account = this.accounts.find(acc => acc.accountNo === Number(this.accountNumber));
    if (account) {
      // Sort transactions in descending order of date
      account.transaction.sort((a, b) => b.date.getTime() - a.date.getTime());
      this.selectedAccount = account;
      this.showTransactions = true;
    }
  }
}
