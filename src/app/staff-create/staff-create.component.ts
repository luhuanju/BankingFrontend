import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staff } from './staff.model';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {

  staffForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const staff: Staff = {
      staffFullName: this.staffForm.value.name,
      staffUserName: this.staffForm.value.username,
      staffPassword: this.staffForm.value.password
    };
    this.adminService.createStaff(staff).subscribe(res => {
      console.log(res);
      // show success message
    }, error => {
      console.log(error);
      // show error message
    });
  }
}
