import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  public url: string = 'https://api-ssl.bitly.com/v4/shorten';
  public token: string = 'd816c339c7fb5e7f41c104295299e80a604a588a';

  constructor( private http: HttpClient ) { }

  getUrlShort() {
    
  }
}
