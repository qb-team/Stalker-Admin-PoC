import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'app';
  constructor(
    public authenticationService: AuthenticationService
  ) {
  }

  email: string;
  password: string;
  tmp: string;

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.tmp = this.email;
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  getEmail() {
      return this.tmp;
  }

}
