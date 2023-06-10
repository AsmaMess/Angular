import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { BusService } from '../services/bus.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  @ViewChild('datatable', { static: true }) table: any;
  @Output() deleteBusEvent = new EventEmitter<number>();

  buses: any[] = [];
  errorMessage = '';
  editForm: any = {};
  constructor(private busService:BusService,private ngxSpinner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.getAllBuses();
  }


  deleteBus(id_bus:number){
    Swal.fire({
      title: 'Voulez vous confirmer la suppression?',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.busService.deleteBus(id_bus).subscribe(data=>{
            console.log(data);
          })
        this.deleteBusEvent.emit(id_bus);
        this.toastr.success("Bus supprimé avec succés",'Suppression avec succés!');
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Suppression annulé', '', 'info')
      }
    })
  }



  
  getBus(id_bus:number){
    const bus = this.buses.find(bus => bus.id_bus === id_bus); 
    if (bus) { Swal.fire({ title: 'Bus: ' + bus.matricule ,
    text: 'Chauffeur: '+ bus.chauffeur,
  
  

    
    icon: 'info', }); } 
   
       
    else { Swal.fire({ title: 'Region non trouvée', icon: 'error', }); } 
    console.log("==========>", id_bus); }
    
      


  getAllBuses(){
    this.busService.getAllBuses().subscribe(buses=>{
        this.buses=buses;
        const datatable = $(this.table.nativeElement);
        datatable.DataTable({
           data: this.buses,
          columns: [
            { title: 'Matricule', data: 'matricule' },
            { title: 'Chauffeur', data: 'chauffeur' },
            { title: 'Couleur', data: 'couleur' },
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
                <button type="button" class="btn btn-danger" data-id="${full.id_bus}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
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
          const id_bus = $(event.currentTarget).data('id');
          this.deleteBus(id_bus);
        });

        datatable.find('.btn-warning').on('click', (event: any) => {
          const id_bus = $(event.currentTarget).data('id');
          this.editBus(id_bus);
        });
      
      datatable.find('.btn-success').on('click', (event: any) =>{
        const id_bus =$(event.currentTarget).data('id');
        this.getBus(id_bus);
      });
      
      
            },
            err => {
              this.errorMessage = err.error.message;
            });
        }
      
  








  editBus(id_bus:number){
    this.router.navigate(["updatebus/"+id_bus]);
  }






  




}
