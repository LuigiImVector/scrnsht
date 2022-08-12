import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenuSectionComponent implements OnInit {
  @Input() title: string = "";
  @Input() isButton: boolean = false;
  
  @Output() messageEvent = new EventEmitter<boolean>();
  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateClickStatus(): void {
    this.clicked = !this.clicked;
    this.messageEvent.emit(this.clicked);
  }

}
