import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBodyCreateLink, ILinkData } from '../interfaces/link.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private httpService: HttpService,
  ) { }

  /**
   * Obtiene un listado de links
   * @returns Observable<ILinkData[]>
   */
  getLinksList(): Observable<ILinkData[]> {
    return this.httpService.get(`links`, { responseType: 'text' }).pipe(
      map(
        (response: string) => {
          const linksData: ILinkData[] = JSON.parse(response.trim().replace(/\s/g, '').replace(/name\[/g, '[').replace(/},]/g, '}]'));
          return linksData;
        }
      ),
      catchError(error => throwError(error))
    );
  }

  /**
   * Crea un link
   * @param body IBodyCreateLink
   * @returns Observable<ILinkData>
   */
  createLink(body: IBodyCreateLink): Observable<ILinkData> {
    return this.httpService.post(`links`, body, { responseType: 'text' }).pipe(
      map(this.mappingResponseLinkData),
      catchError(error => throwError(error))
    );
  }

  /**
   * Elimina un link
   * @param id string
   * @returns Observable<ILinkData>
   */
  deleteLink(id: string): Observable<ILinkData> {
    return this.httpService.delete(`links/${id}`, { responseType: 'text' }).pipe(
      map(this.mappingResponseLinkData),
      catchError(error => throwError(error))
    );
  }

  /**
   * Mapea la respuesta string a objeto link.
   * @param response string
   * @returns ILinkData
   */
  private mappingResponseLinkData(response: string): ILinkData {
    const linkData: ILinkData = JSON.parse(response.trim().replace(/\s/g, '').replace(/name\{/g, '{'));
    return linkData;
  }
}
