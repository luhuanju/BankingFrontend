import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../Staff';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit  {

  showMessage=false;
  mainbody=true;

  ngOnInit(): void {}
  constructor(private router: Router, private http: HttpClient, private userService: UserServiceService) {}

  get f(){
    return this.profileForm.controls;
  }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.email]),
  });
  staff: Staff= new Staff();
  
  apiUrl = 'http://127.0.0.1:8080/api/admin/staff/stafflogin'

  login() {
    this.staff.staffUserName = this.f['username'].value ?? '';
    this.staff.staffPassword = this.f['password'].value ?? '';
   
    this.http.post<HttpResponse<any>>(this.apiUrl,this.staff).subscribe((result) => {
      if(result==null){
        this.showMessage=true;
      }else{
        this.userService.setCurrentStaff(result)
        this.router.navigate(['staff_panel']);
      } 
    });

}
}
