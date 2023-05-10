import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account, CustomerAccount } from '../CustomersAccount';

@Component({
  selector: 'app-approve-account',
  templateUrl: './approve-account.component.html',
  styleUrls: ['./approve-account.component.css']
})
export class ApproveAccountComponent  implements OnInit {

  private url= 'http://127.0.0.1:8080/api/staff/accounts/approve'

  users: Account[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Account[]>(this.url).subscribe((result) => {
       this.users=result
    });
  }

  toggleEnabled(account:any) {
    if (account.approved==='No'){
      account.approved='Yes'
    }else{
      account.approved='No'
    }
    this.http.put<any>(this.url,account).subscribe((result) => {
   });
  }
}
