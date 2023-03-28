import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  constructor(private tokenService:TokenStorageService,private toastr:ToastrService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.user=this.tokenService.getUser();
    console.log(this.user.roles[0]);
  }

  logoutUser(){
    this.tokenService.signOut();
    this.router.navigate(['/']);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.toastr.success("Mr,Mme "+this.user.login+" est déconnecté(e) avec succés !","Succés")
  }
}
