/*
* Shows the number of users actually inside the organization's perimeter
*/
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Organization } from 'src/model/models';

@Component({
  selector: 'app-content-track-users-number',
  templateUrl: './content-track-users-number.component.html',
  styleUrls: ['./content-track-users-number.component.css']
})
export class ContentTrackUsersNumberComponent implements OnInit {
 // @Input() user_number;
  // UserNumber: number;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
     //this.ds.org.subscribe((org: NumUser) => { this.UserNumber = NumUser, this.ds.users_number.emit(this.UserNumber); });
  }

}
