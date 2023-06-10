import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{


  id:any;
  user:any = {};
  requiredFields=false;
  userForm: FormGroup;

  constructor(private activatedRoute :ActivatedRoute,private userService:UserService,private toastr:ToastrService,private spinner :NgxSpinnerService,private router:Router) 
  
  
  
  
  
  { 




    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });




  }
  User : User =new User ();
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];

  





}



createUser(){


  if (this.userForm.valid) {
    // Envoyer les données au serveur ou effectuer toute autre action requise
    console.log(this.userForm.value);

  }
  this.router.navigate(['/users'])
}

    
   }


