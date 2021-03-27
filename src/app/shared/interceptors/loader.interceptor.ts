import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
  ) { }

  /**
   * Intercepta las peticiones http, establede el loader en true para mostrarlo 
   * mientras la petición se resuelve, una vez resuelta establecle el loader en false
   * para ocultarlo
   * @param req HttpRequest
   * @param next HttpHandler
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.setLoader(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.setLoader(false);
      })
    );
  }
}
