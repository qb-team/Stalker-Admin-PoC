import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Organization } from '../organization.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  organization: string;

  constructor( private ds: DataService ) { }

  ngOnInit() {
    this.ds.org.subscribe((org : string) => { this.organization = org; });
  }
  

}
