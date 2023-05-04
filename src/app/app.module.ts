import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AccountListComponent } from './account-list/account-list.component';
import { StaffComponent } from './staff/staff.component';
import { StaffCreateComponent } from './staff-create/staff-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePanelComponent,
    AccountListComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    StaffComponent,
    StaffCreateComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
