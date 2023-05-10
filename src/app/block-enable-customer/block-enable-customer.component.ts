import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerAccount } from '../CustomersAccount';

@Component({
  selector: 'app-block-enable-customer',
  templateUrl: './block-enable-customer.component.html',
  styleUrls: ['./block-enable-customer.component.css']
})
export class BlockEnableCustomerComponent implements OnInit{

  users: Customer[] = [];
  private url= 'http://127.0.0.1:8080/api/staff/customer'

  constructor(private http: HttpClient) {}
  ngOnInit(): void {

    this.http.get<Customer[]>(this.url).subscribe((result) => {
       this.users=result
    });
  }
  // users = [
  //   { name: 'John Doe', email: 'john@example.com', enabled: true },
  //   { name: 'Jane Smith', email: 'jane@example.com', enabled: false },
  //   { name: 'Bob Johnson', email: 'bob@example.com', enabled: true },
  //   { name: 'Mary Brown', email: 'mary@example.com', enabled: true }
  // ];

  toggleEnabled(customer:any) {
    customer.status = !customer.status;
    this.http.put<any>(this.url,customer).subscribe((result) => {
   });
  }
}