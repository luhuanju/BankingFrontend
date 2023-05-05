import { Component } from '@angular/core';
import { CustomerAccountService } from '../customer-account-service.service';
import { AccountType, CustomerAccount } from '../CustomersAccount';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
  accountNumber: string = '';
  confirmAccountNumber: string = '';
  paymentMethod: string = '';

  onSubmit() {
    if (this.accountNumber !== this.confirmAccountNumber) {
      alert('Account numbers do not match');
      return;
    }
    // TODO: handle form submission
  }
}