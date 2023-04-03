import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user:any = {};

  constructor(private activatedRoute :ActivatedRoute,private userService:UserService,private toastr:ToastrService,private spinner :NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.findUserById(id).subscribe(data=>{
      this.user=data;
    })
  }

  updateUser(){
    this.userService.updateUser(this.user.id,this.user).subscribe(data=>{
      console.log(data);
      this.toastr.success('Utilisateur : '+data.firstname+' '+data.name+' a été modifié avec succés','Modification avec succés!');
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate(["user"]);
        this.spinner.hide();
      }, 2000);
    },
      err => {
        this.toastr.error('Echec de modification', 'Erreur!');
      }
    )
  }

}
