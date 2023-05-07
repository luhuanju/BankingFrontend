import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiURL = 'http://127.0.0.1:8080/api/admin/staff';

  constructor(private http: HttpClient) { }

  createStaff(staff: Staff): Observable<any> {
    return this.http.post<any[]>(this.apiURL, staff);
  }
  
}
