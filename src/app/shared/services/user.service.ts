import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUserData } from '../interfaces/user.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: IUserData;

  constructor(
    private httpService: HttpService,
  ) { }

  /**
   * Obtiene un usuario por id
   * @param id number
   * @returns Observable<IUserData>
   */
  getUserByID(id: number): Observable<IUserData> {
    if(this.userData) {
      return of(this.userData);
    }
    return this.httpService.get(`user/${id}`).pipe(
      map(
        (userData: IUserData) => {
          this.userData = Object.assign(userData);
          return this.userData;
        }
      ),
      catchError(error => throwError(error))
    );
  }
}
