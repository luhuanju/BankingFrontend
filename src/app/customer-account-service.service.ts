import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerAccount } from './CustomersAccount';

@Injectable({
  providedIn: 'root'


})
export class CustomerAccountService {

  customerID = 100
  private apiUrl = 'http://127.0.0.1:8080//api/customer/100/acocunt'

  constructor(private http: HttpClient) { }

  getAccountList(): Observable<CustomerAccount[]>{
    return this.http.get<CustomerAccount[]>(this.apiUrl);
  }
} 
