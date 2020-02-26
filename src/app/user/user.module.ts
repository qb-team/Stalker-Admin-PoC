import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailLoginComponent, LoginPageComponent],
  exports: [EmailLoginComponent, LoginPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
