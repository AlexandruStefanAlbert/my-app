import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:44365/Api/auth';
  url ="auth/login";

  constructor(private http : HttpClient) { }


  getUsers(credentials: User): Observable<any>{
    return this.http.post<User>(`${environment.apiURL}/${this.url}`, credentials);

  }

}
