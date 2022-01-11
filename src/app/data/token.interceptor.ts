import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private authSerice: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authSerice.getToken()
    if (!req.headers.has('Content-Type'))
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')})
    if (token)
      req = req.clone({headers: req.headers.set('x-api-key', 'Bearer '+token)})

    return next.handle(req);
  }
}
