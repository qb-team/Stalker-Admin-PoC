import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu-functionality',
  templateUrl: './menu-functionality.component.html',
  styleUrls: ['./menu-functionality.component.css']
})
export class MenuFunctionalityComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  updateContent(click: any)
  {
    this.ds.active_content.emit(click.target.innerHTML);
  }
}
