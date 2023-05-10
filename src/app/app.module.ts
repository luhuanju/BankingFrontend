import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBeneficiaryComponent } from './delete-beneficiary/delete-beneficiary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { StaffCreateComponent } from './staff-create/staff-create.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { BlockEnableCustomerComponent } from './block-enable-customer/block-enable-customer.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfilePanelComponent },
  { path: 'create_staff', component: StaffCreateComponent },
  { path: 'view_staffs', component: StaffListComponent },
  { path: 'approve_beneficiary', component: BeneficiaryListComponent },
  { path: 'staff_login', component: StaffloginComponent  },
  { path: 'staff_panel', component: StaffPanelComponent  },
  
];



@NgModule({
  declarations: [
    AppComponent,
    ProfilePanelComponent,
    AccountListComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    DeleteBeneficiaryComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StaffCreateComponent,
    StaffListComponent,
    BeneficiaryListComponent,
    StaffloginComponent,
    StaffPanelComponent,
    BlockEnableCustomerComponent,
    ApproveAccountComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
