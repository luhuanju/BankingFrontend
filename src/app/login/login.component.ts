import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showMessage=false;
  mainbody=true;

  ngOnInit(): void {
  }
  constructor(private router: Router, private http: HttpClient, private userService: UserServiceService) {}

  get f(){
    return this.profileForm.controls;
  }
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.email]),
  });
  user: User= new User();

  apiUrl = 'http://127.0.0.1:8080/api/customer/login/'
  url:string=''

  login() {
    this.user.name=this.f['username'].value;
    this.user.pwd=this.f['password'].value;
    this.url=this.apiUrl+this.user.name+'/'+this.user.pwd;
    this.http.get<HttpResponse<any>>(this.url).subscribe((result) => {
      if(result==null){
        this.showMessage=true;
      }else{
        this.userService.setCurrentUser(result)
        console.log(this.userService.getCurrentUser()['customerId'])
        this.router.navigate(['profile']);
      }
    });
}
}