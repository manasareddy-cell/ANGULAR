import { Component, OnInit } from '@angular/core';
import { BookserService } from '../bookser.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  bookData;
  customAlert = false;
  books: any[] = [];
  opac;
  intervalId;
  limit = true;
  x;
 s;
 msg;
show=false;
tableShow=true;
noresponse=false;
icon1;
givenBooks;
  constructor(private cd:BookserService) {
    this.givenBooks=this.cd.grantedList;
    console.log(this.givenBooks);
    console.log(this.msg);
    if(this.msg!=null){
      this.icon1=true;
    }
    let observable = this.cd.getBookDetails();
    observable.subscribe(data => {

      console.log(data)
      this.bookData = data;
      console.log(this.bookData)
    })

  }
  ngOnInit() {
  }
  addToCart(i) {

    console.log(i);
    let ch = <any>document.getElementsByClassName("box");
    console.log(ch[i].checked);
    if (ch[i].checked == true) {
      this.books.push(this.bookData[i]);
      console.log(this.books);
      console.log(this.books.length);
      alert('added');
      
     
    }
    
    
    else {
     let index=this.books.indexOf(this.bookData[i]);
      this.books.splice(index,1);
      alert("1 book removed from your list of request");
   
    }
    if (this.books.length <= 3) {
      this.limit = false;
    }
    else {
      this.limit = true;
    }
   this.x=this.books.length;
    }
  
  toBorrow() {

    this.cd.receiving(this.books);
    console.log(this.cd.request());
    alert('Sent request successfully');
  }

  receivedResponse() 
  {
this.tableShow=!this.tableShow;
if(this.msg==null)
{
  this.noresponse=!this.noresponse;
}
else {
this.show=!this.show;
this.icon1=false;


}
  }
}
