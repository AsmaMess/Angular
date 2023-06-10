import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../Models/region';
import { Observable, catchError, throwError } from 'rxjs';







const API_URL = 'http://localhost:8090/region/';

@Injectable({
  providedIn: 'root'
})







export class RegionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private httpClient: HttpClient) { }





getAllRegions(): Observable<Region[]> {
  return this.httpClient.get<Region[]>(API_URL+'read')
    .pipe(
      catchError(this.errorHandler)
    )
}



getRegion(id_region:any)   {
  return this.httpClient.get(API_URL+'get/'+id_region)
    .pipe(
      catchError(this.errorHandler)
   )
}





createRegion(){
  return this.httpClient.post(API_URL+'create/',{responseType: 'region'}) 
}

deleteRegion(id_region:any){
 return this.httpClient.delete(API_URL+'delete/'+ id_region,{responseType: 'text'})
    .pipe(
       catchError(this.errorHandler)
   )
 }

 updateRegion(id_region:any, region:Region): Observable<Region> {
  return this.httpClient.put<Region>(API_URL+'update/'+ id_region, region);
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
