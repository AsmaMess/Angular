import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
 
authUser(user: any) {
let UserArray = [];
if (localStorage.getItem('users')){



UserArray =JSON.parse(localStorage.getItem('Users') || '{}');


}

return UserArray.find((p: { userEmail: any; password: any; }) => p.userEmail ===user.email && p.password ===user.password);

  }
}