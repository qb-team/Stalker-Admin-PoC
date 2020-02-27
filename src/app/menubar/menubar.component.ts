import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {Observable} from 'rxjs';

@Component({
  providers: [ AppComponent ],
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  Email: string;
  constructor(private comp: AppComponent) { }

  ngOnInit(): void {
    this.Email = this.comp.getEmail();
  }

  CallsignOut1() {
    this.comp.signOut();
  }
}
