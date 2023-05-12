
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private userService: UserServiceService) {}
  customerID: number = this.userService.getCurrentUser()['customerId']; // Replace with the actual customer ID


  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      customerId: [{ value: this.customerID, disabled: true }],
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      pan: ['', Validators.required],
      aadhar: ['', Validators.required],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required],
    });
  }

  // Method to handle PAN Attachment change event
  onPanAttachmentChange(event: any) {
    const file = event.target.files[0];
    // Handle file attachment as needed
  }

  // Method to handle Aadhar Attachment change event
  onAadharAttachmentChange(event: any) {
    const file = event.target.files[0];
    // Handle file attachment as needed
  }

  // Method to handle form submission
  updateProfile() {
    if (this.profileForm.valid) {
      const formData = new FormData();
      formData.append('customerId', this.profileForm.value.customerId);
      formData.append('fullname', this.profileForm.value.fullName);
      formData.append('phone', this.profileForm.value.phone);
      formData.append('pan', this.profileForm.value.pan);
      formData.append('aadhar', this.profileForm.value.aadhar);
      formData.append('secretQuestion', this.profileForm.value.securityQuestion);
      formData.append('secretAnswer', this.profileForm.value.securityAnswer);
      formData.append('panAttachment', this.profileForm.value.panAttachment);
      formData.append('aadharAttachment', this.profileForm.value.aadharAttachment);
        // Send the formData using an HTTP PUT request to the API

      const url = `'http://127.0.0.1:8080/api/customer/${this.customerID}`;
      // Make the PUT request using Angular's HttpClient module
      // Assuming you have imported and injected the HttpClient in your component
      this.http.put(url, formData).subscribe(
        () => {
          // Success message
          console.log('Profile updated successfully');
        },
        (error) => {
          // Handle error
          console.error('Failed to update profile', error);
        }
      );
    }
  }
}

