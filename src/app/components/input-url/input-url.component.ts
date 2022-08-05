import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputUrlComponent implements OnInit {
  fillColor = "#171717CC";

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter(): void {
    this.fillColor = "#171717E6";
  }

  mouseLeave(): void {
    this.fillColor = "#171717CC";
  }
  
  onFocus(): void {
    this.fillColor = "#171717";
  }


}
