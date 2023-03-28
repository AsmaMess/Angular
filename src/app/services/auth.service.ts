import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(login: any, password: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      login,
      password
    }, httpOptions);
  }

  register(name:any,firstname:any,cin:any,phoneNumber:any,email:any,role:any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name,
      firstname,
      cin,
      phoneNumber,
      email,
      role
    }, httpOptions);
  }
}
