import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  organization: string;
  ac: string;

  constructor( private ds: DataService ) { }

  ngOnInit() {
    this.ds.org.subscribe((org: string) => { this.organization = org; });
    this.ds.active_content.subscribe((active_content: string) => { this.ac = active_content; console.log("Active content attuale: " + this.ac) });
  }

}
