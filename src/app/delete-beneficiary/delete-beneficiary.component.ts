import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerAccountService } from '../customer-account-service.service';
import { BeneficiaryAccount } from '../CustomersAccount';

@Component({
  selector: 'app-delete-beneficiary',
  templateUrl: './delete-beneficiary.component.html',
  styleUrls: ['./delete-beneficiary.component.css']
})
export class DeleteBeneficiaryComponent implements OnInit {
  items: BeneficiaryAccount[] = [];
  constructor(private dataService: CustomerAccountService) { }

  /**
   * delete the BeneficiaryAccount
   * @param item 
   */
  onDelete(item:BeneficiaryAccount ) {
    console.log(item)
    this.dataService.deleteBeneficiary(item.id).subscribe((result) => {
      this.items.pop()
    });
  }
  /**
   * load on ngOnInit
   */
  ngOnInit() {
    this.dataService.getBeneficiaryList().subscribe((result) => {
      console.log(result)
      this.items = result;
    });
  }
}
