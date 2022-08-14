import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-custom-screenshot',
  templateUrl: './custom-screenshot.component.html',
  styleUrls: ['./custom-screenshot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomScreenshotComponent implements OnInit {
  @Input() url: string = "https://socus.netlify.app/";

  constructor() { }

  ngOnInit(): void {
    this.transformToURL();
  }

  transformToURL(): void {
    try {
      if(!(this.url.startsWith("https://") || this.url.startsWith("http://"))) { // NAND logic gate
        this.url = "http://" + this.url;
      }
    } catch (error) {
      console.error(error);
    }
  }

}
