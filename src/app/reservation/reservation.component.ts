import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {



  @ViewChild('datatable', { static: true }) table: any;
  @Output() deleteBusEvent = new EventEmitter<number>();

  reservations: any[] = [];
  errorMessage = '';
  editForm: any = {};
  constructor(private reservationService:ReservationService,private ngxSpinner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.getAllReservations();
  }


  


  getAllReservations(){
    this.reservationService.getAllReservations().subscribe(reservations=>{
        this.reservations=reservations;
        const datatable = $(this.table.nativeElement);
        datatable.DataTable({
           data: this.reservations,
          columns: [
            { title: 'Date réservation', data: 'date' },
            { title: 'Menu', data: 'menu' },
            { title: 'User', data: 'user' },
            {
              title: 'Actions',
              render: function (data: any, type: any, full: any) {
                return `
               <div style="  display: flex;justify-content: center;">
                <button type="button" class="btn btn-success mr-2" style="background-color: green ; color: white ; border-color: green" data-id="${full.id_bus}">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                   </svg>
                </button>
                <button type="button" class="btn btn-warning mr-2" data-id="${full.id_bus}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                  </svg>
                </button>
             
                </div>
              `;
              }
            }
          ],
          searching: true
        });

        datatable.find('.btn-danger').on('click', (event: any) => {
          const id = $(event.currentTarget).data('id');
          //this.accepterReservation(id);
        });

        datatable.find('.btn-warning').on('click', (event: any) => {
          const id = $(event.currentTarget).data('id');
         // this.refuserReservation(id);
        });
      
     
      });
      
      
        }
      
  












  




}
