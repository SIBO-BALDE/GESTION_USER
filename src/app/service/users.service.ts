import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
urlLocal: string = 'http://localhost:3000/'


  constructor(
    private http: HttpClient,
  ) { }
  //function service pour recuperer les utilisateur par défaut ajouter au niveau du swager
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlLocal}/loopmodels`);
  }
  //function service pour ajouter les utilisateur sur l'interface
  postUsers(user: any): Observable<any> {
    return this.http.post<any>(`${this.urlLocal}/posts`, user);
  }
  //function service pour modifier les utilisateur sur l'interface
  updatedUsers(id: any): Observable<any> {
    return this.http.put<any>(`${this.urlLocal}/posts`, id);
  }
  //function service pour supprimer les utilisateur sur l'interface
  deletetUsers(id: any): Observable<any> {
    return this.http.delete<any>(`${this.urlLocal}/posts`, id);
  }
}
