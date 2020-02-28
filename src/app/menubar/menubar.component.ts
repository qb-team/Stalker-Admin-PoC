import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  organization: string;
  constructor(private ds: DataService, private authenticationService: AuthenticationService) { console.log('Costruttore di menubar'); }

  ngOnInit(): void {

  }

  setOrg(click: any) {
    this.organization = click.target.innerHTML;
    this.ds.org.emit(this.organization);
  }

  /*CallSignOut() {
    this.comp.signOut();
  }*/
  SignOut() {
    this.authenticationService.SignOut();
  }
}
