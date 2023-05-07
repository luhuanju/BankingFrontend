import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeneficiaryAccount, CustomerAccount } from './CustomersAccount';

@Injectable({
  providedIn: 'root'


})
export class CustomerAccountService {
  private apiUrl = 'http://127.0.0.1:8080/api/customer/234242/acocunt'
  private posAccounttUri = 'http://127.0.0.1:8080/api/customer/234242/acocunt'
  private beneficiaryUri = 'http://127.0.0.1:8080/api/customer/234242/beneficiary'
  private deletebeneficiaryUri= 'http://127.0.0.1:8080/api/customer/234242/beneficiary/'

  constructor(private http: HttpClient) { }

  getAccountList(): Observable<CustomerAccount[]>{
    return this.http.get<CustomerAccount[]>(this.apiUrl);
  }
  postAccount(obj:CustomerAccount):Observable<any>{
    return this.http.post(this.posAccounttUri,obj)
  }

  getBeneficiaryList():Observable<BeneficiaryAccount[]>{
    return this.http.get<BeneficiaryAccount[]>(this.beneficiaryUri);
  }
  deleteBeneficiary(beneficiaryid:number):Observable<any>{
    return this.http.delete(this.deletebeneficiaryUri+beneficiaryid)
  }

} 
