import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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



















}