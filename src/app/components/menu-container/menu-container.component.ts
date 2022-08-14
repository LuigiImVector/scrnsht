import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuContainerComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<string>();
  statusFromChild: boolean = false;
  @ViewChild('screen', { static: true }) screen: any;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  receiveMessage(status: boolean): void {
    this.statusFromChild = status;
  }

  sendMessage(): void {
    /*html2canvas(document.querySelector("#screen") as HTMLElement).then(canvas => {
      document.body.appendChild(canvas)
    });*/
  }

}
