import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserService } from '../bookser.service';
import { Validators, FormBuilder, Form } from '@angular/forms';




@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})


export class AdminpageComponent implements OnInit {
 manasa;
 manasa1;
  addBook;
  index1;
  addBook1;
request;
  killr;
  isShow = false;
  showList = true;
  i;
  norequests = false;
  icon;
  index;
  bookData;
  user;
  
  addbook;
  
  got = [];
  list;
  abc = false;
  opac;
  intervalId;
  customAlert = false;
  bookfor=[];
  enable=true;
  msg="Hey Reader! Got your request of the books. And your request has been accepted for the below mentioned books. Enjoy reading";
  
 

  
  constructor(private router:Router,private pk:BookserService ,private fm: FormBuilder) {
  // console.log(this.service.req);
  //let got=this.service.request();
  //console.log(got);

    this.got = this.pk.req;
    console.log(this.got);
    if (this.got.length != 0) {
      this.icon = true;
    }
     let ter=this.pk.getBookDetails();
   ter.subscribe(data=>
      {
        // console.log(data);
        this.manasa=data;
        console.log(this.manasa);
      })
   }
   add() {
     this.manasa1 = this.addBook.value;
     this.manasa.push(this.manasa1);
    //  this.addBook.reset();
    alert("added successfully");
//  console.log(this.addBook.value);
    

  }
  
  delete(i: number) {
    console.log(this.manasa[i])
    this.manasa.splice(i,1);
  }
  update(j: number) {
    this.index1 = j;
    console.log("in the update");
    this.addBook1.patchValue({
      acc: this.manasa[j].acc,
      booktit: this.manasa[j].booktit,
      categ: this.manasa[j].categ,
      auth: this.manasa[j].auth,
      copy: this.manasa[j].copy,
      bookpub: this.manasa[j].bookpub,
      publ: this.manasa[j].publ,
      isb: this.manasa[j].isb,
      copyrightyear: this.manasa[j].copyrightyear,
      dateadd: this.manasa[j].dateadd,
      stat: this.manasa[j].stat,
    })
  }
  update1() {
    let obj = this.addBook1.value
    console.log(this.addBook1.value)
    this.manasa.splice(this.index, 1, obj)
    console.log(obj)
    alert("updated")
    this.addBook1.reset();
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
   localStorage.setItem(this.killr.value.username,obj);
   alert("added successfully");
   }
  received() {


    if (this.got.length != 0) {
      this.isShow = !this.isShow;
      this.showList = !this.showList;
      this.icon = false;
      console.log(this.bookfor.length);
    
    }
    else {
      this.norequests = !this.norequests;
      this.showList = !this.showList;
    }

//  this.isShow = !this.isShow;
//      this.showList = !this.showList;
    console.log(this.got);
 
  }

  sending(){


    alert('Books given as per the request!')
    this.pk.response(this.msg,this.kiki);
    console.log(this.kiki)
    console.log(this.msg);
    this.isShow = false;
    this.showList = true
    this.got=[];
  }
  no()
  {
    this.isShow = !this.isShow;
    this.showList = !this.showList;
    this.got=[];
    this.isShow = false;
    this.showList = true;
  }
  kiki=[];
  addToCart(i:number){
    console.log(this.got);
    console.log(this.got[i]);
     this.kiki.push(this.got[i]);
     console.log(this.kiki);
  }
  totalUsers() {
    let x = localStorage.length;
    alert('Total number of users : ' + x);
  }
toGetIndex(i) {
   this.i = i;
 }
  

  ngOnInit() {
    this.addBook = this.fm.group(
      {
        acc: [null, [Validators.required, Validators.minLength(2)]],
        booktit: [null, [Validators.required, Validators.minLength(1)]],
        categ: [null, [Validators.required, Validators.minLength(1)]],
        auth: [null, [Validators.required, Validators.minLength(1)]],
        copy: [null, [Validators.required, Validators.minLength(1)]],
        bookpub: [null, [Validators.required, Validators.minLength(1)]],
        publ: [null, [Validators.required, Validators.minLength(1)]],
        isb: [null, [Validators.required, Validators.minLength(1)]],
        copyrightyear: [null, [Validators.required, Validators.minLength(1)]],
        dateadd: [null, [Validators.required, Validators.minLength(1)]],
        stat: [null, [Validators.required, Validators.minLength(1)]],
      })
    
 
  
    this.addBook1 = this.fm.group(
      {
        acc: [],
        booktit: [null, [Validators.required, Validators.minLength(1)]],
        categ: [null, [Validators.required, Validators.minLength(1)]],
        auth: [null, [Validators.required, Validators.minLength(1)]],
        copy: [null, [Validators.required, Validators.minLength(1)]],
        bookpub: [null, [Validators.required, Validators.minLength(1)]],
        publ: [null, [Validators.required, Validators.minLength(1)]],
        isb: [null, [Validators.required, Validators.minLength(1)]],
        copyrightyear: [null, [Validators.required, Validators.minLength(1)]],
        dateadd: [null, [Validators.required, Validators.minLength(1)]],
        stat: [null, [Validators.required, Validators.minLength(1)]],
      })
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
  
    
}