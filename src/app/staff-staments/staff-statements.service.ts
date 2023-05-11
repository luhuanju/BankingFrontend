import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  private apiURL = 'http://127.0.0.1:8080/api/staff/account/';

  constructor(private http: HttpClient) { }

  getStatements(accountNumber: string): Observable<any>{
    return this.http.get<any[]>(this.apiURL+accountNumber);
  }
  
}
