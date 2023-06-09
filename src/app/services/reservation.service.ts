import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../Models/reservation';
import { Observable, catchError } from 'rxjs';
const API_URL = 'http://localhost:8090/reservation/';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }



  getAllReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(API_URL+'read')
     
  }






accepterReservation(){


}

refuserReservation(){


  
}






}