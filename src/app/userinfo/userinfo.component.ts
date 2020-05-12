import { Component, OnInit } from '@angular/core';
import { Validators, Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  manasa;
  request;
  error;
  error1;
  error2;
  rev;
  killr;
  member;


  constructor(private fm:FormBuilder,private router:Router) { 
  // let ter=this.as.getBook();
  // ter.subscribe(data=>
  //    {
  //      this.man=data;
  //      console.log(this.man);
  //    })
  
  }
  
  ngOnInit() {
    this.killr = this.fm.group({
      username: [null, [Validators.required]],
      fname: [null, [Validators.required, Validators.minLength(1)]],
      lname: [null, [Validators.required, Validators.minLength(1)]],
      password: [null, [Validators.required, Validators.minLength(1)]],
      matric: [null, [Validators.required, Validators.minLength(1)]],
      dept: [null, [Validators.required, Validators.minLength(1)]],
      level: [null, [Validators.required, Validators.minLength(1)]]
    })
  
  }
  ngSubmit(kg: Form) {
    let vk = kg
    console.log(vk)
  }
  name;
  Reqst()
  {
  this.request = this.rev.returnReq();
  this.name=this.rev.returName();
  console.log(this.request)
  this.error=false;
  this.error1=true;
  this.error2=false
  }
  
   adduser()
   {
    // this.man1 = this.killr.value;
    // this.man.push(this.man1);
    // this.killr.reset();
    // alert("added successfully");
    // console.log(this.killr.value);
   //this.member.push(this.killr.value)
  let obj=JSON.stringify(this.killr.value);
   localStorage.setItem(this.killr.value.username,obj)
   }
   
  member1;
  mem()

  {
    this.error=false;
    this.error2=true;
    this.error1=false; 
    let obj=localStorage.getItem(this.killr.value.username);
   console.log(obj)
  this.member1= JSON.parse(obj)
  console.log(this.member1)
  }
  confrim(i:number)
  {
    console.log("i am in confrim")
    console.log(this.request[i].accno);
    for(let j=0;j<=this.manasa.length-1;j++)
    {
      if(this.request[i].accno===this.manasa[j].accno)
      {
       console.log(this.manasa[j].copies) 
        this.manasa[j].copies--;
        this.request.splice(i,1);
      }
    }
  }
  back()
  {
    this.error=true;
    this.error1=false;
    this.error2=false;
  }
 
}


