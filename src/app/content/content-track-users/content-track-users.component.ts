import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-track-users',
  templateUrl: './content-track-users.component.html',
  styleUrls: ['./content-track-users.component.css']
})
export class ContentTrackUsersComponent implements OnInit {

  focused = true;
  organization;
  presentUsersOrg;
  constructor() {
    this.presentUsersOrg = this.getUsers();
  }

  getUsers() {
    // fetches data from the database
    // todo
  }

  ngOnInit(): void {
  }

}
