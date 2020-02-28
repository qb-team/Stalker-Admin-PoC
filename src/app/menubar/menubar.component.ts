import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  providers: [ AppComponent ],
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Output() nameOrg = new EventEmitter<string>();
  organization: string;

  constructor(private comp: AppComponent) { }

  ngOnInit(): void {

  }

  getOrg(click: any) {
    this.organization = click.target.innerHTML;
    this.nameOrg.emit(click.target.innerHTML);
  }


  CallSignOut() {
    this.comp.signOut();
  }
}
