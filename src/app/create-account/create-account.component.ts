import { Component } from '@angular/core';
import { CustomerAccountService } from '../customer-account-service.service';
import { AccountType, CustomerAccount } from '../CustomersAccount';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  number: number = 0 ;
  choice: string  = 'CA';

  constructor(private dataService: CustomerAccountService) {}

  onSubmit() {
    const accountid=234242;
    console.log(`Number: ${this.number}, Choice: ${this.choice}`);
    const obj= new CustomerAccount(accountid,this.number,'No',new Date(),this.choice==='CA'?AccountType.CA: AccountType.SB)
    console.log(obj)
    this.dataService.postAccount(obj).subscribe((result) => {
      console.log(result)
    });
  }
}
