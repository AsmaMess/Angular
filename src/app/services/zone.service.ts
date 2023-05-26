import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


const API_URL = 'http://localhost:8090/api/zones';



@Injectable({
  providedIn: 'root'
})
export class ZoneService {

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllZones(): Observable<Zone[]> {
    return this.httpClient.get<Zone[]>(API_URL+'/read')
      .pipe(
        catchError(this.errorHandler)
      )
  }

   findZoneById(id_zone:any): Observable<Zone> {
     return this.httpClient.get<Zone>(API_URL+ id_zone)
       .pipe(
         catchError(this.errorHandler)
      )
   }
  createZone(){
    return this.httpClient.post(API_URL+'createzone',{responseType: 'zone'}) 
  }

 deleteZone(id_zone:any){
   return this.httpClient.delete(API_URL+'delete/'+ id_zone,{responseType: 'text'})
      .pipe(
         catchError(this.errorHandler)
     )
   }

   updateBus(id_zone:any, zone:any): Observable<Zone> {
    return this.httpClient.put<Zone>(API_URL+'update/'+ id_zone, zone)
     .pipe(
         catchError(this.errorHandler)
       )
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