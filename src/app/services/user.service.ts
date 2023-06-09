import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {User} from "../Models/user";
import { catchError } from 'rxjs/operators';


const API_URL = 'http://localhost:8090/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL+'read')
      .pipe(
        catchError(this.errorHandler)
      )
  }

   findUserById(id:any): Observable<User> {
     return this.httpClient.get<User>(API_URL+'get/'+id)
       .pipe(
         catchError(this.errorHandler)
      )
   }
  createUser(){
    return this.httpClient.post(API_URL+'createuser/',{responseType: 'user'}) 
  }

 deleteUser(id:any){
   return this.httpClient.delete(API_URL+'delete/'+ id,{responseType: 'text'})
      .pipe(
         catchError(this.errorHandler)
     )
   }

   updateUser(id:any, user:User): Observable<User> {
    return this.httpClient.put<User>(API_URL+'update/'+ id, user);
   }

   errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
   }


}
