import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'LoginStalker';
  visible = false;
  reset = false;

  constructor(public authenticationService: AuthenticationService) {
  }

  email: string;
  password: string;

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  CallResetPassword() {
    this.visible = true;
  }

  Back() {
    this.visible = false;
    this.reset = false;
  }

  resetPassword() {
    this.reset = true;
    this.authenticationService.ResetPassword(this.email);
    this.email = '';
  }
 }
