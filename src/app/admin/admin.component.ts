import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminLogin;
error;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.adminLogin=this.fb.group(
      {
        username:['', [Validators.required,Validators.minLength(5)]],
        pass:['', [Validators.required,Validators.minLength(5)]]
      }
    );
  }
 

submit(){
  console.log(this.adminLogin.value);
  let userString =localStorage.getItem(this.adminLogin.value.username);
  console.log(userString);
  if(userString!=null){
    let userobj=JSON.parse(userString);
    console.log(userobj.username===this.adminLogin.value.username&&userobj.pass===this.adminLogin.value.pass);
    if(userobj.username===this.adminLogin.value.username&&userobj.pass===this.adminLogin.value.pass){
       sessionStorage.setItem('user',userobj.username);
       this.router.navigate(['/adminpage']);
    }
    else{
    
     this.error=true;
    }
  }
  else{
    this.error=true;
  }
  }

}
