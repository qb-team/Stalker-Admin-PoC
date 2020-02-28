import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../services/data.service';
import { Organization } from '../organization.model';


@Component({
  providers: [ AppComponent ],
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  organization: string;
  constructor(private comp: AppComponent, private ds: DataService) { console.log("Costruttore di menubar"); }

  ngOnInit(): void {

  }

  setOrg(click: any)
  {
    this.organization = click.target.innerHTML;
    this.ds.org.emit(this.organization);
  }

  CallSignOut() {
    this.comp.signOut();
  }
}
