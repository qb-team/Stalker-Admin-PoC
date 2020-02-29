import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { OrganizationService } from 'src/api/api';
import { Observable } from 'rxjs';
import { Organization } from 'src/model/models';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit, AfterContentInit {
  organization: string;
  orgArr: Array<Organization>;
  constructor(private ds: DataService, private authenticationService: AuthenticationService, /*private os: OrganizationService*/) {  }

  ngOnInit() {
    //this.orgArr = this.os.getOrganizations();
    //this.organization = this.orgArr[0];
    this.organization = document.getElementById('first_org').innerHTML; //è deprecato
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

  homePage()
  {
    this.ds.active_content.emit("Home page");
  }
}
