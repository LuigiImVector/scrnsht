import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenuButtonComponent implements OnInit {
  title = "Save screenshot"; // custom

  constructor() { }

  ngOnInit(): void {
  }

}
