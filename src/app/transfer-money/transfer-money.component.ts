import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Payload } from '../CustomersAccount';
import { TransferService } from './transfer/transfer.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
})
export class TransferMoneyComponent {

  @Output() changeSelectedValue = new EventEmitter<string>();

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService, private transferService: TransferService) {}

  // customerId: number = 9; // Replace with the actual customer ID
  customerId = this.userService.getCurrentUser()['customerId']

  fromAccount: any;
  toAccount: number;
  amount: number;
  reason: string;

  accountList: any[];
  beneficiaryList: any[];
  
  ngOnInit() {

    console.log("customerId: ", this.customerId)

    const url = `http://localhost:8080/api/customer/${this.customerId}/acocunt`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.accountList = data;
        // console.log('this is accounts:', this.accountList);
      },
      (error) => {
        console.log('Error occurred while fetching user data:', error);
      }
    );
    
    const getBeneUrl = `http://localhost:8080/api/customer/${this.customerId}/beneficiary`
    this.http.get<any[]>(getBeneUrl).subscribe(
      (data) => {
        this.beneficiaryList = data;
        // console.log('this is beneficiaries:', this.beneficiaryList);
      },
      (error) => {
        console.log('Error occurred while fetching user data:', error);
      }
    );
  }

  getOptions(): number[] {
    // get the <option> number of beneficiaries
    const beneList = Array.from({ length: this.beneficiaryList.length }, (_, index) => index);
    // console.log("beneList[0]", this.beneficiaryList[beneList[0]])
    return beneList
  }

  submit() {
    if (this.fromAccount) {
      const transferUrl = "http://localhost:8080/api/customer/transfer";
      const payload = new Payload()
      payload.fromAccNumber = this.fromAccount;
      payload.toAccNumber = this.toAccount;
      payload.amount = this.amount;
      payload.reason = this.reason;
      console.log("payload: ", payload)
      this.transferService.putPayload(payload, transferUrl).subscribe((result) => {
        this.changeSelectedValue.emit('Account List');
      });

      console.log(
        'fromAccount : ',
        this.fromAccount,
        'will transfer money toAccount: ',
        this.toAccount,
        "with the amount: ",
        this.amount
      );
    } else {
      console.log('no account selected!');
    }
  }


  
}