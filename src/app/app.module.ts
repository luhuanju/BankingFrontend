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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfilePanelComponent },
  { path: 'create_staff', component: StaffCreateComponent },
  { path: 'view_staffs', component: StaffListComponent },
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
