/*
* Specific-content component to show data about user-tracking
*/
import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { OrganizationService } from '../../../api/api';
import { Organization } from 'src/model/models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-content-track-users',
  templateUrl: './content-track-users.component.html',
  styleUrls: ['./content-track-users.component.css']
})
export class ContentTrackUsersComponent implements OnInit {
  /*
  * The actual organization selected
  */
  @Input() org: string;

  /*
  * The number of users actually inside the organization's perimeter
  */
  presentUsersOrg;

  /*
  * An observable of an organization
  */
  ob: Observable<Organization>;

  /*
  * A string to store the coordinates of the organization's perimeter in json format
  */
  json_coordinates: string;

  /*
  * The coordinates of the organization's perimeter
  */
  coordinates;

  constructor( /*private os: OrganizationService*/ ) {
    this.presentUsersOrg = this.getUsers();
  }

  /*
  * Set presentUsersOrg at the number of the users actually inside the organization's perimeter
  */
  getUsers() {
    // fetches data from the database
    // todo
  }

  ngOnInit(): void {
    //this.ob = this.os.getOrganization(0);
    //this.ob.subscribe((org: Organization) => {
      //json_coordinates = org.trackingArea;
      //this.coordinates = JSON.parse(this.json_coordinates);
    //})
  }



}
