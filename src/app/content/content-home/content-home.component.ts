import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {

  @Input() org: string;
  constructor() { }

  ngOnInit(): void {
  }

}
