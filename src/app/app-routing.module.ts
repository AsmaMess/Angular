import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {UpdateuserComponent} from "./updateuser/updateuser.component";
import { CreateuserComponent } from './createuser/createuser.component';
import { BusComponent } from './bus/bus.component';
import { ZoneComponent } from './zone/zone.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { MenuComponent } from './menu/menu.component';
import { RegionComponent } from './region/region.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddUserComponent } from './Add/add-user/add-user.component';
import { UpdateregionComponent } from './updateregion/updateregion.component';












const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"users",component:UserComponent},
  {path:"update/:id",component:UpdateuserComponent},
  {path:"createuser",component:CreateuserComponent},
  {path:"bus",component:BusComponent},
  {path:"zone",component:ZoneComponent},

  {path:"updatebus/:id", component:UpdatebusComponent},
  {path:"menu", component:MenuComponent},
 {path:"region",component:RegionComponent},
 {path:"updateregion/:id", component:UpdateregionComponent},

{path:"reservation",component:ReservationComponent},
{path:"addUser",component:AddUserComponent},

  


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
