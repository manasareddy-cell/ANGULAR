import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdduserbuttonComponent } from './adduserbutton/adduserbutton.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { FormsModule } from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {HttpClientModule} from '@angular/common/http';
import { Register1Component } from './register1/register1.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    AdminpageComponent,
    RegisterComponent,
    AddusersComponent,
    UserloginComponent,
    AdduserbuttonComponent,
    UserinfoComponent,
    Register1Component,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
