import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payload } from 'src/app/CustomersAccount';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  // private transferUrl = "http://localhost:8080/api/customer/transfer";
  
  putPayload(obj: Payload, transferUrl: string): Observable<any>{
    // return this.http.put(this.transferUrl, obj);
    return this.http.put(transferUrl, obj);

  }


}
