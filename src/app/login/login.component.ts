import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showMessage=false;
  mainbody=true;
  users!: User[];
  ngOnInit(): void {
  }
  constructor(private router: Router, private http: HttpClient) {}

  get f(){
    return this.profileForm.controls;
  }
  
  
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.email]),
    
  });
  user: User= new User();
  login() {
    // this.user.name=this.f['username'].value;
    // this.user.pwd=this.f['password'].value;
    // console.log(this.profileForm.value);

    // this.service.addPerson(this.user).subscribe(response => {
    //   console.log("Receive the Response from server" + response);
    // });

    // this.showMessage=true;
    // this.mainbody=false;

    // this.http.get<User[]>('http://localhost:8080/getAllUsers').subscribe(users => {
    //   this.users = users;
    // });
   
    // this.router.navigate(['/home'])
    // perform authentication logic here
  }
}