import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RegionService } from '../services/region.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Region } from '../Models/region';
declare var $: any;
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {


    @ViewChild('datatable', { static: true }) table: any;
    @Output() deleteRegionEvent = new EventEmitter<number>();
    // data: any;
  
    // options: any;
    regions: any[] = [];
    errorMessage = '';
    editForm: any = {};
    constructor(private regionService:RegionService,private ngxSpinner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }
    Region : Region =new Region ();
    ngOnInit() {
  
      // const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('--text-color');
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
      // this.data = {
      //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      //     datasets: [
      //         {
      //             label: 'Regions',
      //             data: [65, 59, 80, 81, 56, 55, 40],
      //             fill: false,
      //             borderColor: documentStyle.getPropertyValue('--blue-500'),
      //             tension: 0.4
      //         },
      //         {
      //             label: 'Bus',
      //             data: [28, 48, 40, 19, 86, 27, 90],
      //             fill: false,
      //             borderColor: documentStyle.getPropertyValue('--pink-500'),
      //             tension: 0.4
      //         }
      //     ]
      // };
  
      // this.options = {
      //     maintainAspectRatio: false,
      //     aspectRatio: 0.6,
      //     plugins: {
      //         legend: {
      //             labels: {
      //                 color: textColor
      //             }
      //         }
      //     },
      //     scales: {
      //         x: {
      //             ticks: {
      //                 color: textColorSecondary
      //             },
      //             grid: {
      //                 color: surfaceBorder,
      //                 drawBorder: false
      //             }
      //         },
      //         y: {
      //             ticks: {
      //                 color: textColorSecondary
      //             },
      //             grid: {
      //                 color: surfaceBorder,
      //                 drawBorder: false
      //             }
      //         }
      //     }
      // };
  
  
      
  
  
  
      this.getAllRegions();
    }





    deleteRegion(id_region:number){
      Swal.fire({
        title: 'Voulez vous confirmer la suppression?',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Oui',
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.regionService.deleteRegion(id_region).subscribe(data=>{
              console.log(data);
            })
          this.deleteRegionEvent.emit(id_region);
          this.toastr.success("Region supprimé avec succés",'Suppression avec succés!');
          window.location.reload();
        } else if (result.isDenied) {
          Swal.fire('Suppression annulé', '', 'info')
        }
      })
    }




    getRegion(id_region:number){

    
      const region = this.regions.find(region => region.id_region === id_region); 
      if (region) { Swal.fire({ title: 'Region: ' + region.nom_region ,
      text: region.description,
      
     
       icon: 'info', }); } 
      else { Swal.fire({ title: 'Region non trouvée', icon: 'error', }); } 
      console.log("==========>", id_region); }


      // Swal.fire({
      // title:'Region:  ' + region.nom_region,
      // icon:'info',
      // })

     


    
      


  
   
  
  
    getAllRegions(){
      this.regionService.getAllRegions().subscribe(regions=>{
          this.regions=regions;
          const datatable = $(this.table.nativeElement);
          datatable.DataTable({
            data: this.regions,
            columns: [
              { title: 'Nom', data: 'nom_region' },
              { title: 'Description', data: 'description' },
              {
            
                title: 'Actions',
                render: function (data: any, type: any, full: any) {
                  return `
                 <div style="  display: flex;justify-content: center;">
                  <button type="button" class="btn btn-success mr-2" style="background-color: green ; color: white ; border-color: green" data-id="${full.id_region}">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                     </svg>
                  </button>
                  <button type="button" class="btn btn-warning mr-2" data-id="${full.id_region}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn btn-danger" data-id="${full.id_region}">
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
            const id_region = $(event.currentTarget).data('id');
            this.deleteRegion(id_region);
          });
  
          datatable.find('.btn-warning ').on('click', (event: any) => {
            const id_region = $(event.currentTarget).data('id');
            this.editRegion(id_region);
          });

          datatable.find('.btn-success').on('click', (event: any) =>{
            const id_region =$(event.currentTarget).data('id');
            this.getRegion(id_region);
          });






        },
        err => {
          this.errorMessage = err.error.message;
        });
    }
  
    editRegion(id_region:number){
      this.router.navigate(["updateregion/"+id_region]);
  
    }


  
   
  }