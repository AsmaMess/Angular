import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {





  }

//   getUser(){
//      const id = this.activatedRoute.snapshot.params['id'];
//    this.userService.findUserById(id).subscribe(data=>{
//        this.user=data;
//     })
//   }

//    updateUser(){

//      if(this.checkRequiredFields()){
//        this.userService.updateUser(this.user.id,this.user).subscribe(data=>{
//        console.log(data);
//            this.toastr.success('Utilisateur : '+data.firstname+' '+data.name+' a été modifié avec succés','Modification avec succés!');
//           this.spinner.show();
//           setTimeout(() => {
//             this.router.navigate(["user"]);
//             this.spinner.hide();
//            }, 2000);
//         },
//         err => {
//           Swal.fire({
//              icon: 'error',
//             title: 'Erreur',
//              text: 'Echec de modification!',
//            })
//         }
//        )
//     }
//    }

//    @ts-ignore
//   checkRequiredFields() : boolean{
//     const emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     const namePattern: RegExp = /^[a-zA-Z\s]*$/;
//     if(!this.user.name){
//       this.toastr.error("Le nom de l'utilisateur est obligatoire", 'Erreur!');
//       return this.requiredFields;
//     }else if(!namePattern.test(this.user.name)){
//       this.toastr.warning("Le nom de l'utilisateur est invalide", 'Attention!');
//       return this.requiredFields;
//     }
//     if(!this.user.firstname){
//       this.toastr.error("Le prénom de l'utilisateur est obligatoire", 'Erreur!');
//       return this.requiredFields;
//     }else if(!namePattern.test(this.user.firstname)){
//       this.toastr.warning("Le prénom de l'utilisateur est invalide", 'Attention!');
//       return this.requiredFields;
//     }
//     if(!this.user.cin){
//       this.toastr.error("Le CIN de l'utilisateur est obligatoire", 'Erreur!');
//       return this.requiredFields;
//     }
//     if(!this.user.phoneNumber){
//       this.toastr.error("Le numéro du tél de l'utilisateur est obligatoire", 'Erreur!');
//       return this.requiredFields;
//     }
//     if(!this.user.email){
//       this.toastr.error("Le email de l'utilisateur est obligatoire", 'Erreur!');
//       return this.requiredFields;
//     }else if(!emailPattern.test(this.user.email)){
//       this.toastr.warning("Le email de l'utilisateur est invalide", 'Attention!');
//       return this.requiredFields;
//     }

//     this.requiredFields=true;
//     return this.requiredFields;
//   }




















}
