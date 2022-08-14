import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaveComponent implements OnInit {
  urlForCustomScreenshot: string = '';

  constructor() { }

  ngOnInit(): void {
    this.urlForCustomScreenshot = window.history.state.url;
  }

}
