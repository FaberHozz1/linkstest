import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private showLoader: BehaviorSubject<number>;
  private counterLoader = 0;
  private actualValue = false;

  constructor(
  ) {
    this.showLoader = new BehaviorSubject<number>(0);
  }

  /**
   * Actualiza el estado del observable que controla el loader
   * Solo cambia el valor del observable si es necesario cambiarlo
   */
  setLoader(value: boolean) {
    this.counterLoader = (value) ? ++this.counterLoader : --this.counterLoader;
    if ((this.actualValue !== !!(this.counterLoader))) {
      this.actualValue = value;
      this.showLoader.next(this.counterLoader);
    }
  }

  /**
   * Retorna un observable con el valor booleano de ocultar el loader
   */
  getShowLoader(): Observable<number> {
    return this.showLoader.asObservable();
  }
}
