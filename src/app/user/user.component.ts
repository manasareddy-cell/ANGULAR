import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginGroup;
error;
  constructor(private router:Router,private builder:FormBuilder) { }

  ngOnInit() {
this.loginGroup=this.builder.group(
  {
    username:['', [Validators.required,Validators.minLength(5)]],
    pass:['', [Validators.required,Validators.minLength(5)]]
  }
);
  }
  
  submit(){
 console.log(this.loginGroup.value);
 let userString =localStorage.getItem(this.loginGroup.value.username);
 console.log(userString);
 if(userString!=null){
   let userobj=JSON.parse(userString);
   console.log(userobj.username===this.loginGroup.value.username&&userobj.pass===this.loginGroup.value.pass);
   if(userobj.username===this.loginGroup.value.username&&userobj.pass===this.loginGroup.value.pass){
      sessionStorage.setItem('user',userobj.username);
      this.router.navigate(['userlogin']);
   }
   else{
   
    this.error=true;
   }
 }
 else{
   this.error=true;
 }
 }
 login(){
   this.router.navigateByUrl('/adminpage')
 }
 
}
