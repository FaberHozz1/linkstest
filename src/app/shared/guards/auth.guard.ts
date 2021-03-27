import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { URLS } from '../constants/urls.constant';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  
  /**
   * Valida el ambiente para pasear por la app sin tener sesión.
   * Valida si el usuario tiene sesión para acceder a una url.
   */
   canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!environment.production) {
      return true;
    }
    if (!this.authService.isAuthenticated) {
      this.router.navigate([`./${URLS.authentication}`]);
    }
    return this.authService.isAuthenticated;
  }
}
