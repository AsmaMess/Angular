import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../Models/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id:any;
  user:any = {};
  requiredFields=false;
  formUser! : FormGroup;

  constructor(private activatedRoute :ActivatedRoute,private userService:UserService,private toastr:ToastrService,private spinner :NgxSpinnerService,private router:Router) { }
  User : User =new User ();
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];

     this.userService.findUserById(id).subscribe((response:any)=>{
    
    this.User=response;
    console.log(response) 
    
     })
  }

 getUser(){
      this.id = this.activatedRoute.snapshot.params['id'];
   this.userService.findUserById(this.id).subscribe(data=>{
    this.formUser.value.firstName = data.firstname;
    console.log(this.formUser.value.firstName)
       this.user=data;


    })
   }

   updateUser(){

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
   

       this.userService.updateUser(this.User.id,this.User).subscribe((res)=>{
      
       console.log(res)
      
       })
      
     
      
    // this.toast.success({detail:"Succès",summary:"formation modifiée avec succès"});
      
      
      
      
    this.router.navigate(['/users'])
      
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
 
