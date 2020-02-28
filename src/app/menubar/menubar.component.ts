import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import {Observable} from 'rxjs';

@Component({
  providers: [ AppComponent ],
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Output() selected_organization = new EventEmitter<string>();
  Email: string;
  organization: string;
  constructor(private comp: AppComponent) { }

  ngOnInit(): void {

  }

  setOrg(event)
  {
    this.organization = event.target.value;
    console.log('setOrg(event)');
    this.selectedOrganization();
  }

  selectedOrganization()
  {
    this.selected_organization.emit(this.organization);
    console.log('selectedOrganization()');
  }

  CallsignOut1() {
    this.comp.signOut();
  }
}
