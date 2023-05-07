import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private httpClient: HttpClient,private router: Router) {}
  
  ngOnInit(): void {}

  get f(){
    return this.productFrom.controls;
  }
  
  productFrom = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, this.mustMatch('password')])
  });

  customer: Customer=new Customer();
  private apiUrl = 'http://127.0.0.1:8080/api/customer/register'
  post(){
    console.log('submit')
    this.customer.username=this.f['userName'].value;
    this.customer.fullname=this.f['fullName'].value;
    this.customer.password=this.f['password'].value;
    this.httpClient.post(this.apiUrl,this.customer).subscribe((result) => {
      this.router.navigate(['profile']);
    });
  }
  mustMatch(controlName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const controlToMatch = control.parent?.get(controlName);
      return controlToMatch && controlToMatch.value !== control.value ? {mustMatch: true} : null;
    };
  }
}
