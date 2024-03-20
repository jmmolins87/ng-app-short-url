import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  public url: string = 'https://api-ssl.bitly.com/v4/shorten';
  public token: string = '';

  constructor( private http: HttpClient ) { }

  getUrlShort( urlName: string ): Observable<any> {

    const body = {
      long_url: urlName
    }

    return this.http.post( this.url, body );
  }
}
