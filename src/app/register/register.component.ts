import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  role:any;
  form: any = {
    name: null,
    firstname:null,
    cin:null,
    phoneNumber:null,
    email: null,
    role:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService:AuthService,private toastr :ToastrService,private router :Router,private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const roleSelected =document.getElementById('role') as HTMLSelectElement;
    const roleValue=roleSelected.value;
    this.form.role=[roleValue];

    const { name,firstname,cin,phoneNumber,email,role } = this.form;

    this.authService.register(name,firstname,cin,phoneNumber,email,role).subscribe(
       data => {
         console.log(data);
         this.spinner.show();
         this.toastr.success('Utilisateur : '+this.form.firstname+' '+this.form.name+' ajouté avec succés','Authentification avec succés!');
         this.router.navigate([""]);
         setTimeout(() => {
           this.spinner.hide();
         }, 2000);


       },
        err => {
              this.errorMessage = err.error.message;
              console.log(err.error);
              this.toastr.error(this.errorMessage, 'Error!');
        }
      );
  }

}
