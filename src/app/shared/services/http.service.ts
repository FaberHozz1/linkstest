import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  }),
  params: {},
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  /**
   * Transforma un objeto a parámetros http
   * @param data Objeto transformar
   */
  createParams(data: any) {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(function (key) {
      httpParams = httpParams.append(key, data[key]);
    });
    return httpParams;
  }

  /**
   * mapea la respuesta del servidor
   * @param data Respuesta de a petición
   */
  private mapData(data: any) {
    return data;
  }

  /**
   * Ejecuta el método get de http
   */
  get(url: string, options?: any) {
    return this.httpClient.get(`${environment.baseUrl}${url}`, options).pipe(
      map(this.mapData),
      catchError(this.handleError)
    );
  }

  /**
   * Ejecuta el método delete de http
   */
  delete(url: string, options?: any) {
    return this.httpClient.delete(`${environment.baseUrl}${url}`, options).pipe(
      map(this.mapData),
      catchError(this.handleError)
    );
  }

  /**
   * Ejecuta el método post
   * @param body Body del request
   * @param options Parámetros http
   */
  post(url, body, options?: any) {
    return this.httpClient.post(`${environment.baseUrl}${url}`, body, options).pipe(
      map(this.mapData),
      catchError(this.handleError)
    );
  }

  /**
   * Maneja los errores
   * @param error error a manejar
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  }
}
