import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  providers: [ AppComponent ],
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  organization: string;
  constructor(private comp: AppComponent) { }

  ngOnInit(): void {

  }

  setOrg(org: string) {
    this.organization = org;
  }

  CallsignOut1() {
    this.comp.signOut();
  }
}
