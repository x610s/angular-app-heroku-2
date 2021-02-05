import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  url:string = 'https://spring-backend-angular.herokuapp.com/planes';//Todos permitidos
private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }) //tipo de respuesta
  constructor(private _http:HttpClient) { }




  getPlan(id): Observable<Plan> {
    return this._http.get<Plan>(`${this.url}/${id}`)
  }
  getPlanes(): Observable<Plan[]> {
    return this._http.get<Plan[]>(`${this.url}`);
  }
}
