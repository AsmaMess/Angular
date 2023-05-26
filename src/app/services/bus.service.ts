
import { FormControl, FormGroup } from '@angular/forms';
import { Bus } from '../Models/bus';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';



const API_URL = 'http://localhost:8090/api/bus/';



@Injectable({
  providedIn: 'root'
})
export class BusService {

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllBuses(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(API_URL+'read')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getBus(id_bus:number, bus:Bus)    {
    return this.httpClient.get(API_URL+'get/'+id_bus)
      .pipe(
        catchError(this.errorHandler)
     )
  }
  createBus(){
    return this.httpClient.post(API_URL+'create/',{responseType: 'bus'}) 
  }

 deleteBus(id_bus:any){
   return this.httpClient.delete(API_URL+'delete/'+ id_bus,{responseType: 'text'})
      .pipe(
         catchError(this.errorHandler)
     )
   }

   updateBus(id:any, bus:Bus): Observable<Bus> {
    return this.httpClient.put<Bus>(API_URL+'update/'+ id, bus);
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