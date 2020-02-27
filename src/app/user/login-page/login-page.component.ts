import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  title = 'LoginStalker';
  items: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.items = db.list('Organizzazione1').valueChanges();
  }
}
