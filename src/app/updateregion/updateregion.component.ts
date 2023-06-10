import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Region } from '../Models/region';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-updateregion',
  templateUrl: './updateregion.component.html',
  styleUrls: ['./updateregion.component.css']
})
export class UpdateregionComponent implements OnInit{

  id_region:any;
  region:any = {};
  requiredFields=false;
  formRegion! : FormGroup;




  constructor(private activatedRoute :ActivatedRoute,private regionService:RegionService,private toastr:ToastrService,private spinner :NgxSpinnerService,private router:Router) { }
  Region : Region =new Region ();
  ngOnInit(): void {
    const id_region=this.activatedRoute.snapshot.params['id'];
    console.log(id_region) 

     this.regionService.getRegion(id_region).subscribe((response:any)=>{
    
    this.Region=response;
    console.log(response) 
    
     })
  }







  getRegion(){
    this.id_region = this.activatedRoute.snapshot.params['id'];
 this.regionService.getRegion(this.id_region).subscribe(data=>{
 
  console.log(this.formRegion.value.description)
     this.region=data;


  })
 }


   updateRegion(){

    //  if(this.checkRequiredFields()){
    //   console.log(this.user);
    //   this.userService.updateUser(this.id,this.user).subscribe( data =>{
    //     console.log(data);
    //     this.User=new User();
    //         this.toastr.success('Utilisateur : '+data.firstname+' '+data.firstname+' a été modifié avec succés','Modification avec succés!');
    //      this.spinner.show();
    //      this.router.navigate(["user"]);
    //      this.spinner.hide();
    //     },
    //    err => {
    //       Swal.fire({
    //           icon: 'error',
    //        title: 'Erreur',
    //          text: 'Echec de modification!',
    //       })
    //   }
    //    )
    //  }
   

    this.regionService.updateRegion(this.Region.id_region,this.Region).subscribe((res)=>{
    
      console.log(res)
     
      })

      
    // this.toast.success({detail:"Succès",summary:"formation modifiée avec succès"});
      
      
    this.router.navigate(['/region'])
      
     }
  
 
    }