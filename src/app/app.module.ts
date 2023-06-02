import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import { UserComponent } from './user/user.component';
import {DataTablesModule} from "angular-datatables";
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FooterComponent } from './footer/footer.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { BusComponent } from './bus/bus.component';
import { ZoneComponent } from './zone/zone.component';
import { RegionComponent } from './region/region.component';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import{TagModule} from 'primeng/tag';

import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ChartModule } from 'primeng/chart';
import { MainComponent } from './main/main.component';
import { TimelineModule } from 'primeng/timeline';
import { DataViewModule} from 'primeng/dataview';
import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdateuserComponent,
    FooterComponent,  
    CreateuserComponent,
    BusComponent,
    ZoneComponent,
    RegionComponent,
    UpdatebusComponent,
    MainComponent,
    MenuComponent,
  


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    RatingModule ,
    TimelineModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    }),
    NgxSpinnerModule,
   // FontAwesomeModule,
   ToastrModule,
   ReactiveFormsModule,
   ChartModule,
   DataViewModule,
   TagModule,
   SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule {

}
