import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { Register1Component } from './register1/register1.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'admin',component:AdminComponent},
 // {path:'adduserbutton',component:AddusersComponent},
  {path:'user',component:UserComponent},
  {path:'home',component:HomeComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'register',component:RegisterComponent},
  //{path:'addusers',component:AddusersComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userinfo',component:UserinfoComponent},
  {path:'register1',component:Register1Component},
  {path:'about',component:AboutComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
