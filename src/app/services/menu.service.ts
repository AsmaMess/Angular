import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Menu } from '../Models/menu';











import { throwError } from 'rxjs';




const API_URL = 'http://localhost:8090/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    
      constructor(private httpClient: HttpClient) { }
    


      getMenus(): Observable<Menu[]> {
        return this.httpClient.get<Menu[]>(API_URL+'read/')
          .pipe(
            catchError(this.errorHandler)
          )
      }




















      getMenu(id:number, menu:Menu)    {
        return this.httpClient.get(API_URL+'get-menu/'+id)
          .pipe(
            catchError(this.errorHandler)
         )
      }




      addMenu(){
        return this.httpClient.post(API_URL+'create-menu/',{responseType: 'menu'}) 
      }



      deleteMenu(id:any){
        return this.httpClient.delete(API_URL+'delete-menu/'+id,{responseType: 'text'})
           .pipe(
              catchError(this.errorHandler)
          )
        }
   



        updateMenu(id:any, menu:Menu): Observable<Menu> {
    return this.httpClient.put<Menu>(API_URL+'update-menu/'+ id, menu);
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
















  getData() {
    return [
        {
            id: 1000,
            name: 'Menu1',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2021-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663
        },
        {
            id: 1001,
            name: 'Menu 2',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chanay, Jeffrey A Esq',
            date: '2022-02-09',
            status: 'proposal',
            verified: true,
            activity: 0,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 82429
        },
        {
            id: 1002,
            name: 'Menu 3',
            country: {
                name: 'Panama',
                code: 'pa'
            },
            company: 'Menu 3',
            date: '2022-05-13',
            status: 'qualified',
            verified: false,
            activity: 63,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 28334
        },
        {
            id: 1003,
            name: 'Menu 4',
            country: {
                name: 'Slovenia',
                code: 'si'
            },
            company: 'Feltz Printing Service',
            date: '2020-09-15',
            status: 'new',
            verified: false,
            activity: 37,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 88521
        },
        {
            id: 1004,
            name: 'Menu 5',
            country: {
                name: 'South Africa',
                code: 'za'
            },
            company: 'Printing Dimensions',
            date: '2023-01-20',
            status: 'proposal',
            verified: true,
            activity: 33,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 93905
        },
        {
            id: 1005,
            name: 'Simona Morasca',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chapman, Ross E Esq',
            date: '2018-02-16',
            status: 'qualified',
            verified: false,
            activity: 68,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 50041
        },
        {
            id: 1006,
            name: 'Mitsue Tollner',
            country: {
                name: 'Paraguay',
                code: 'py'
            },
            company: 'Morlong Associates',
            date: '2018-02-19',
            status: 'renewal',
            verified: true,
            activity: 54,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 58706
        },
        {
            id: 1007,
            name: 'Leota Dilliard',
            country: {
                name: 'Serbia',
                code: 'rs'
            },
            company: 'Commercial Press',
            date: '2019-08-13',
            status: 'renewal',
            verified: true,
            activity: 69,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 26640
        },
        {
            id: 1008,
            name: 'Sage Wieser',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Truhlar And Truhlar Attys',
            date: '2018-11-21',
            status: 'unqualified',
            verified: true,
            activity: 76,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 65369
        },
        {
            id: 1009,
            name: 'Kris Marrier',
            country: {
                name: 'Mexico',
                code: 'mx'
            },
            company: 'King, Christopher A Esq',
            date: '2015-07-07',
            status: 'proposal',
            verified: false,
            activity: 3,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 63451
        },
        {
            id: 1010,
            name: 'Minna Amigon',
            country: {
                name: 'Romania',
                code: 'ro'
            },
            company: 'Dorl, James J Esq',
            date: '2018-11-07',
            status: 'qualified',
            verified: false,
            activity: 38,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 71169
        },
        {
            id: 1011,
            name: 'Abel Maclead',
            country: {
                name: 'Singapore',
                code: 'sg'
            },
            company: 'Rangoni Of Florence',
            date: '2017-03-11',
            status: 'qualified',
            verified: true,
            activity: 87,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 96842
        },
        {
            id: 1012,
            name: 'Kiley Caldarera',
            country: {
                name: 'Serbia',
                code: 'rs'
            },
            company: 'Feiner Bros',
            date: '2015-10-20',
            status: 'unqualified',
            verified: false,
            activity: 80,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 92734
        },
        {
            id: 1013,
            name: 'Graciela Ruta',
            country: {
                name: 'Chile',
                code: 'cl'
            },
            company: 'Buckley Miller & Wright',
            date: '2016-07-25',
            status: 'negotiation',
            verified: false,
            activity: 59,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 45250
        },
        {
            id: 1014,
            name: 'Cammy Albares',
            country: {
                name: 'Philippines',
                code: 'ph'
            },
            company: 'Rousseaux, Michael Esq',
            date: '2019-06-25',
            status: 'new',
            verified: true,
            activity: 90,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 30236
        },
        {
            id: 1015,
            name: 'Mattie Poquette',
            country: {
                name: 'Venezuela',
                code: 've'
            },
            company: 'Century Communications',
            date: '2017-12-12',
            status: 'negotiation',
            verified: false,
            activity: 52,
            representative: {
                name: 'Anna Fali',
                image: 'annafali.png'
            },
            balance: 64533
        },
        {
            id: 1016,
            name: 'Meaghan Garufi',
            country: {
                name: 'Malaysia',
                code: 'my'
            },
            company: 'Bolton, Wilbur Esq',
            date: '2018-07-04',
            status: 'unqualified',
            verified: false,
            activity: 31,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 37279
        },
        {
            id: 1017,
            name: 'Gladys Rim',
            country: {
                name: 'Netherlands',
                code: 'nl'
            },
            company: 'T M Byxbee Company Pc',
            date: '2020-02-27',
            status: 'renewal',
            verified: true,
            activity: 48,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 27381
        },
        {
            id: 1018,
            name: 'Yuki Whobrey',
            country: {
                name: 'Israel',
                code: 'il'
            },
            company: 'Farmers Insurance Group',
            date: '2017-12-21',
            status: 'negotiation',
            verified: true,
            activity: 16,
            representative: {
                name: 'Bernardo Dominic',
                image: 'bernardodominic.png'
            },
            balance: 9257
        },
        {
            id: 1019,
            name: 'Fletcher Flosi',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'Post Box Services Plus',
            date: '2016-01-04',
            status: 'renewal',
            verified: true,
            activity: 19,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 67783
        },
        {
            id: 1020,
            name: 'Bette Nicka',
            country: {
                name: 'Paraguay',
                code: 'py'
            },
            company: 'Sport En Art',
            date: '2016-10-21',
            status: 'renewal',
            verified: false,
            activity: 100,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 4609
        },
        {
            id: 1021,
            name: 'Veronika Inouye',
            country: {
                name: 'Ecuador',
                code: 'ec'
            },
            company: 'C 4 Network Inc',
            date: '2017-03-24',
            status: 'renewal',
            verified: false,
            activity: 72,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 26565
        },
        {
            id: 1022,
            name: 'Willard Kolmetz',
            country: {
                name: 'Tunisia',
                code: 'tn'
            },
            company: 'Ingalls, Donald R Esq',
            date: '2017-04-15',
            status: 'renewal',
            verified: true,
            activity: 94,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 75876
        },
        {
            id: 1023,
            name: 'Maryann Royster',
            country: {
                name: 'Belarus',
                code: 'by'
            },
            company: 'Franklin, Peter L Esq',
            date: '2017-03-11',
            status: 'qualified',
            verified: false,
            activity: 56,
            representative: {
                name: 'Elwin Sharvill',
                image: 'elwinsharvill.png'
            },
            balance: 41121
        },
        {
            id: 1024,
            name: 'Alisha Slusarski',
            country: {
                name: 'Iceland',
                code: 'is'
            },
            company: 'Wtlz Power 107 Fm',
            date: '2018-03-27',
            status: 'qualified',
            verified: true,
            activity: 7,
            representative: {
                name: 'Stephen Shaw',
                image: 'stephenshaw.png'
            },
            balance: 91691
        },
        {
            id: 1025,
            name: 'Allene Iturbide',
            country: {
                name: 'Italy',
                code: 'it'
            },
            company: 'Ledecky, David Esq',
            date: '2016-02-20',
            status: 'qualified',
            verified: true,
            activity: 1,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 40137
        },
        {
            id: 1026,
            name: 'Chanel Caudy',
            country: {
                name: 'Argentina',
                code: 'ar'
            },
            company: 'Professional Image Inc',
            date: '2018-06-24',
            status: 'new',
            verified: true,
            activity: 26,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 21304
        },
        {
            id: 1027,
            name: 'Ezekiel Chui',
            country: {
                name: 'Ireland',
                code: 'ie'
            },
            company: 'Sider, Donald C Esq',
            date: '2016-09-24',
            status: 'new',
            verified: false,
            activity: 76,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 60454
        },
        {
            id: 1028,
            name: 'Willow Kusko',
            country: {
                name: 'Romania',
                code: 'ro'
            },
            company: 'U Pull It',
            date: '2020-04-11',
            status: 'qualified',
            verified: true,
            activity: 7,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 17565
        },]}}