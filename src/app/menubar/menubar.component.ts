import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit, AfterContentInit {
  organization: string;
  constructor(private ds: DataService, private authenticationService: AuthenticationService) {  }

  ngOnInit() {
    this.organization = document.getElementById('first_org').innerHTML;
  }

  ngAfterContentInit(){
    this.ds.org.emit(this.organization);
  }

  setOrg(click: any) {
    this.organization = click.target.innerHTML;
    this.ds.org.emit(this.organization);
  }
  
  SignOut() {
    this.authenticationService.SignOut();
  }
}
