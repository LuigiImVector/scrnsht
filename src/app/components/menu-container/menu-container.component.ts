import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuContainerComponent implements OnInit {
  statusFromChild: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  receiveMessage(status: boolean) {
    this.statusFromChild = status;
  }

}
