import { Component, OnInit } from '@angular/core';
import { Bus } from '../Models/bus';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})

export class UpdatebusComponent implements OnInit {
    id_bus:any;
  bus:any = {};
    requiredFields=false;
    formBus! : FormGroup;




    constructor(private activatedRoute :ActivatedRoute,private busService:BusService,private toastr:ToastrService,private spinner :NgxSpinnerService,private router:Router) { }
    Bus : Bus =new Bus ();
    ngOnInit(): void {
      const id_bus=this.activatedRoute.snapshot.params['id'];
      console.log(id_bus) 

       this.busService.getBus(id_bus ,this.bus).subscribe((response:any)=>{
      
      this.Bus=response;
      console.log(id_bus) 
      
       })
    }
 
  
     updateBus(){
  
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
     
  
      this.busService.updateBus(this.Bus.id_bus,this.Bus).subscribe((res)=>{
      
        console.log(res)
       
        })
       
        
      // this.toast.success({detail:"Succès",summary:"formation modifiée avec succès"});
        
        
        
        
      this.router.navigate(['/bus'])
        
       }
      }
  
    
  //     checkRequiredFields() : boolean{
  //      const emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  //     const namePattern: RegExp = /^[a-zA-Z\s]*$/;
  //     if(!this.user.firstname){
  //       this.toastr.error("Le nom de l'utilisateur est obligatoire", 'Erreur!');
  //      return this.requiredFields;
  //    }else if(!namePattern.test(this.user.firstname)){
  //        this.toastr.warning("Le prénom de l'utilisateur est invalide", 'Attention!');
  //        return this.requiredFields;
  //      }
  //      if(!this.user.lastname){
  //       this.toastr.error("Le prénom de l'utilisateur est obligatoire", 'Erreur!');
  //        return this.requiredFields;
  //     }else if(!namePattern.test(this.user.lastname)){
  //       this.toastr.warning("Le prénom de l'utilisateur est invalide", 'Attention!');
  //        return this.requiredFields;
  //      }
     
     
  //     if(!this.user.email){
  //        this.toastr.error("L'email de l'utilisateur est obligatoire", 'Erreur!');
  //       return this.requiredFields;
  //     }else if(!emailPattern.test(this.user.email)){
  //       this.toastr.warning("L'email de l'utilisateur est invalide", 'Attention!');
  //        return this.requiredFields;
  //     }
  
  //     this.requiredFields=true;
  //      return this.requiredFields;
  //    }
  
  //   }
  //  function checkRequiredFields() {
  //    throw new Error('Function not implemented.');
   
  