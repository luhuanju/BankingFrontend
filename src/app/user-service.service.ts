import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public currentUser: Observable<any>;

  constructor() { }

  public setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public getCurrentUser() {
    const customer = localStorage.getItem('currentUser')
    if(customer!==null) {
       const obj= JSON.parse(customer);
       return obj;
    } 
  }


  public setCurrentStaff(staff: any) {
    localStorage.setItem('currentStaff', JSON.stringify(staff));
  }

  public getCurrentStaff() {
    const customer = localStorage.getItem('currentStaff')
    if(customer!==null) {
       const obj= JSON.parse(customer);
       return obj;
    } 
  }

  public clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }
}
