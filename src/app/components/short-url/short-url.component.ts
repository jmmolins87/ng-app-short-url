import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  public nameUrl: string = '';
  public urlShort: string = '';
  public isProcessedUrl: boolean = false
  public loading: boolean = false;
  public showError: boolean = false;
  public textError: string = '';
  
  constructor( private _shortUrlService: ShortUrlService ) { }
  
  ngOnInit(): void {
  }

  getUrlProcessed() {
    
    if( this.nameUrl === '' ) {
      
      this.error( 'Por favor, ingrese una URL' );
      return;
    }

    this.isProcessedUrl = false;
    this.loading = true;

    setTimeout(() => {
      this.obtainUrlShort();
    }, 2000);
  }
  
  obtainUrlShort() {
    
    this._shortUrlService.getUrlShort( this.nameUrl ).subscribe(( data: any ) => {
      this.isProcessedUrl = true;
      this.urlShort = data.link;
      this.loading = false;
    }, error => {
      
      this.loading = false;
      this.nameUrl = '';
      if( error.error.description === 'The value provided is invalid.' ) {
        this.error( 'La URL ingresada no es válida' );
      }
    })
  }

  error( value: string ) {

    this.showError = true;
    this.textError = value;
    setTimeout(() => {
      this.showError = false;
    }, 4000);
  }

}
