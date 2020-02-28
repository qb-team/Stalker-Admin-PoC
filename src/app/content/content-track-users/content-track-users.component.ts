import { Component, OnInit, DoCheck, Input } from '@angular/core';


@Component({
  selector: 'app-content-track-users',
  templateUrl: './content-track-users.component.html',
  styleUrls: ['./content-track-users.component.css']
})
export class ContentTrackUsersComponent implements OnInit {

  focused = true;
  @Input() org: string;
  presentUsersOrg;
  constructor() {
    this.presentUsersOrg = this.getUsers();
    console.log('Costruttore()');
  }

  getUsers() {
    // fetches data from the database
    // todo
  }

  ngOnInit(): void {

  }



}
