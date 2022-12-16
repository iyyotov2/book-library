import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | null = null;
  
  get isLoggedIn() {
    if (sessionStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.post<any>('/users/register', { email, password });
  }

  login(email: string, password: string) {
    return this.http.post<any>('/users/login', { email, password });
  }

  logout() {
    let headers = new HttpHeaders()
      .append('X-Authorization', `${sessionStorage.getItem('authToken')}`);
    return this.http.get<any>('/users/logout', { 'headers': headers });
  }
}