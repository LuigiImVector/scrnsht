import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-custom-screenshot',
  templateUrl: './custom-screenshot.component.html',
  styleUrls: ['./custom-screenshot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomScreenshotComponent implements OnInit {
  @Input() url: string = "https://socus.netlify.app/";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.transformToURL();
  }

  transformToURL(): void {
    if(!(this.url.startsWith("https://") || this.url.startsWith("http://"))) { // NAND logic gate
      this.url = "http://" + this.url;
    }
  }

}
