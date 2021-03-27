import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { URLS } from '../constants/urls.constant';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) { }

  /**
   * Obtiene el estado de la sesión
   * Mejora: Esto debería válidar contra backend la vigencia del token.
   */
  get isAuthenticated(): boolean {
    return !!(localStorage.getItem('token'));
  }

  /**
   * Elimina el token del local storage
   * Navega al login
   * Mejora: Debe esxpirar la vigencia del token en backend.
   */
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl(URLS.authentication);
  }

  /**
   * Almacena el token de un usuario logueado
   * @param token token a almacenar
   */
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
  * Obtiene el Authorization token de un usuario logueado
  */
  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  /**
   * Obtiene el token de sesión con un llamado hhtp post que 
   * recibe un body de usuario.
   * Si es exitoso, llama a setToken para almacenar el token 
   * de sesión
   * @param body email: string, password: string
   * @returns boolean
   */
  login(body: any) {
    return this.httpService.post('login', body).pipe(
      map(
        ({ token }) => {
          try {
            this.setToken(token);
            return true;
          } catch (error) {
            return false;
          }
        }
      ),
      catchError(error => throwError(error))
    );
  }

  /**
   * Crea un nuevo usuario
   * @param body email: string, name: string, password: string
   * @returns boolean
   */
  register(body: any) {
    return this.httpService.post('register', body).pipe(
      map(
        ({ id }) => {
          try {
            // TODO: Set token, pero back responde un id
            return true;
          } catch (error) {
            return false;
          }
        }
      ),
      catchError(error => throwError(error))
    );
  }
}
