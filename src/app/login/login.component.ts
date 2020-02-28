import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private data: DataService) { }
  email: string;
  password: string;

  ngOnInit(): void {
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  CallResetPassword() {
    this.data.visible = true;
  }

  getAuth() {
    return this.authenticationService;
  }

  getVisible() {
    return this.data.visible;
  }
}
