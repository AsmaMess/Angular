import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";
import { NgForm } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
 
  }




  onSubmit(loginForm: NgForm) {


    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if(user){
      console.log('Login Succ');
    } else {


console.log('login unsucc');

    }
    


  //       this.spinner.show();
  //       this.router.navigate(["home"]);
  //       setTimeout(() => {
  //         this.spinner.hide();
  //       }, 2000);
  //       this.toastr.success('Bienvenue '+data.login+' !', 'Authentification avec succés!');
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.toastr.error(this.errorMessage, 'Error!');
  //       this.isLoginFailed = true;
  //     }
  //   );
  


  //   }
   }
  }