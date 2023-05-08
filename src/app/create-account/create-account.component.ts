import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../customer-account-service.service';
import { AccountType, CustomerAccount } from '../CustomersAccount';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  @Output() changeSelectedValue = new EventEmitter<string>();

  number: number = 0 ;
  choice: string  = 'CA';
  constructor(private router: Router,private userService:UserServiceService, private dataService: CustomerAccountService) {}

  selectedValue: string | null = 'Account List';

  onSelectedValueChange(value: string) {
    this.selectedValue = value;
  }
  onSubmit() {
    const accountid=this.userService.getCurrentUser()['customerId'];
    console.log(`Number: ${this.number}, Choice: ${this.choice}`);
    const obj= new CustomerAccount(accountid,this.number,'No',new Date(),this.choice==='CA'?AccountType.CA: AccountType.SB)
    console.log(obj)
    this.dataService.postAccount(obj).subscribe((result) => {
      this.changeSelectedValue.emit('Account List');
    });
  }
}
