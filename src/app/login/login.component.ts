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
  validate = true;

  ngOnInit(): void {
  }

  signIn() {
    try {
      this.authenticationService.SignIn(this.email, this.password);
      if (this.email === '' || this.password === '') {
        this.validate = false;
      } else {
        this.validate = true;
      }
      this.email = '';
      this.password = '';
    } catch (e) {
       this.validate = false;
      }
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
