import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN = 'd816c339c7fb5e7f41c104295299e80a604a588a';
    request = request.clone({ setHeaders: { Authorization: `Bearer ${ TOKEN }` }});

    return next.handle(request).pipe( catchError(( error: HttpErrorResponse ) => {
      return throwError( error );
    }));
  }
}
