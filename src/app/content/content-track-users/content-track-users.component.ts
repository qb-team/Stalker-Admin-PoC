import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-track-users',
  templateUrl: './content-track-users.component.html',
  styleUrls: ['./content-track-users.component.css']
})
export class ContentTrackUsersComponent implements OnInit {

  focused: boolean = true;
  organization;
  present_users_org;
  constructor() {
    this.present_users_org = this.getUsers();
  }

  getUsers()
  {
    // fetches data from the database
    // todo
  }

  ngOnInit(): void {
  }

}