import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-screenshot',
  templateUrl: './custom-screenshot.component.html',
  styleUrls: ['./custom-screenshot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomScreenshotComponent implements OnInit {
  @Input() url: string = "https://socus.netlify.app/";
  @Input() imageToShow: any = "/assets/loading.png";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.transformToURL();
  }

  transformToURL(): void {
    try {
      // if(!(this.url.startsWith("https://") || this.url.startsWith("http://"))) { // NAND logic gate
        // this.url = "http://" + this.url;


        // this.createImageFromBlob(this.getImage());
        // this.getImageFromService();

      // }
    } catch (error) {
      console.error(error);
    }
  }

  getImageFromService() {
    this.getImage().subscribe((data: Blob) => {
      this.createImageFromBlob(data);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }
  }

  getImage(): Observable<Blob> {
    // return this.http.get('http://167.172.107.45:8000/getImage?url=' + this.url, { responseType: 'blob' });
    return this.http.get('/getImage?url=' + this.url, { responseType: 'blob' });
  }

}
