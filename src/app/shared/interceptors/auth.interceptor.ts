import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
  ) {}

  /**
   * Intercepta las peticiones http, si el usuario tiene sesión agrega el token a los headers
   * @param req HttpRequest
   * @param next HttpHandler
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.auth.isAuthenticated) {
      return next.handle(req);
    }
    const authToken = this.auth.getAuthorizationToken();
    let authReq = req.clone({
      headers: req.headers.set('token', authToken)
    });
    return next.handle(authReq);
  }
}
