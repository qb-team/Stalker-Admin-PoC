/*
* Specific-content component to show data about user-tracking
*/
import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { OrganizationService } from '../../../../api/api';
import { Organization } from 'src/model/models';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


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
  ob: Organization;

  /*
  * A string to store the coordinates of the organization's perimeter in json format
  */
  json_coordinates: string;

  /*
  * The coordinates of the organization's perimeter
  */
  coordinates;

  constructor( private os: OrganizationService, private ds: DataService ) {
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
    this.os.getOrganizationById(1).subscribe((o: Organization) => { this.ob = o; this.json_coordinates = o.trackingArea;
      this.coordinates = JSON.parse(this.json_coordinates).Organizzazioni;});
    this.ds.users_number.emit(this.presentUsersOrg);
  }



}