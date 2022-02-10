import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Trainer } from '../model/Trainer';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  trainer = new Trainer();
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();
    // @ts-ignore
    this.trainer = JSON.parse(sessionStorage.getItem('userdetails'));
    if (this.trainer && this.trainer.password && this.trainer.email) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' + btoa(this.trainer.email + ':' + this.trainer.password)
      );
    }
    let authorization = sessionStorage.getItem('Authorization');
    if (authorization) {
      httpHeaders = httpHeaders.append('Authorization', authorization);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders,
    });
    return next.handle(xhr).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            console.log('ugh!!!');
          }
        }
      )
    );
  }
}
