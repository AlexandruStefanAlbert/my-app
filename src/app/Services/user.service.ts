import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:44365/Api/User';


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);

  }

  constructor(private http : HttpClient) { }
}
