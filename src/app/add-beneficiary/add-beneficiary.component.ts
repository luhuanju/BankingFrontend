import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerAccountService } from '../customer-account-service.service';
import { AccountType, BeneficiaryAccount, CustomerAccount } from '../CustomersAccount';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
  accountNumber: string = '';
  confirmAccountNumber: string = '';
  paymentMethod: string = '';
  ngOnInit(): void {}
  constructor(private router: Router, private http: HttpClient,private userService: UserServiceService) {}
  private customerId=this.userService.getCurrentUser()['customerId']
  apiUrl = 'http://127.0.0.1:8080/api/customer/' + this.customerId+'/beneficiary'
  @Output() changeSelectedValue = new EventEmitter<string>();

  onSubmit() {
    if (this.accountNumber !== this.confirmAccountNumber) {
      alert('Account numbers do not match');
      return;
    }
    const beneficiaries= new BeneficiaryAccount()
    beneficiaries.accountNumber=this.accountNumber 
    beneficiaries.accountType=this.paymentMethod==='CA'?AccountType.CA: AccountType.SB
    beneficiaries.approved='No'
    beneficiaries.customerId=this.customerId

    this.http.post(this.apiUrl,beneficiaries).subscribe((result) => {
      console.log(this.apiUrl)
      console.log(beneficiaries)
      this.changeSelectedValue.emit('Remove Beneficiary');
    });

  }
}