import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff, StaffStatus } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiURL = 'http://127.0.0.1:8080/api/admin/staff';

  constructor(private http: HttpClient) { }

  viewStuffs(): Observable<any> {
    return this.http.get<any[]>(this.apiURL);
  }
  updateStaff(staff: Staff): Observable<any> {
    const update_staff = {
      staffId: staff.staffId,
      status: staff.status? StaffStatus.ENABLED : StaffStatus.DISABLED ,
    };
    return this.http.put<any[]>(this.apiURL,update_staff);
  }
  
}
