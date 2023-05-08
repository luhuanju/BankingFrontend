import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiary } from './beneficiary.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  private apiUrl = 'http://127.0.0.1:8080/api/staff/beneficiary';

  constructor(private http: HttpClient) { }

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(this.apiUrl);
  }
  approveBeneficiary(beneficiary:Beneficiary): Observable<Beneficiary> {
    return this.http.put<Beneficiary>(this.apiUrl,beneficiary);
  }
}
