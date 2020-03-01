/*
 * Parent component
 */
import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title: 'UI';

  /*
   * Create the object authenticationService to use the service AuthenticationService
   */
  constructor(private authenticationService: AuthenticationService) {
  }

  /*
   * Return the object authenticationService that is, the authenticated user
   */
  getAuth() {
    return this.authenticationService;
  }
 }
