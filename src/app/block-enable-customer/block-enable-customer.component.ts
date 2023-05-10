import { Component } from '@angular/core';

@Component({
  selector: 'app-block-enable-customer',
  templateUrl: './block-enable-customer.component.html',
  styleUrls: ['./block-enable-customer.component.css']
})
export class BlockEnableCustomerComponent {

  users = [
    { name: 'John Doe', email: 'john@example.com', enabled: true },
    { name: 'Jane Smith', email: 'jane@example.com', enabled: false },
    { name: 'Bob Johnson', email: 'bob@example.com', enabled: true },
    { name: 'Mary Brown', email: 'mary@example.com', enabled: true }
  ];

  toggleEnabled(user:any) {
    user.enabled = !user.enabled;
  }
}