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

  @Input() org: string;
  presentUsersOrg;
  ob: Observable<Organization>;
  json_coordinates: string;
  coordinates;
  constructor( /*private os: OrganizationService*/ ) {
    this.presentUsersOrg = this.getUsers();
  }

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
