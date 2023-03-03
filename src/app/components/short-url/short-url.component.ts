import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  public nameUrl: string = '';
  public urlShort: string = '';
  public isProcessedUrl: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getUrlProcessed() {
    this.isProcessedUrl = true;
    console.log( this.nameUrl );
  }

}
