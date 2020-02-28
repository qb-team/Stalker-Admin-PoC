import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private data: DataService) { }
  reset = false;
  email: string;

  ngOnInit(): void {
  }

  Back() {
    this.data.visible = false;
    this.reset = false;
  }

  resetPassword() {
    this.reset = true;
    this.authenticationService.ResetPassword(this.email);
    this.email = '';
  }

  getVisible() {
    return this.data.visible;
  }
}
