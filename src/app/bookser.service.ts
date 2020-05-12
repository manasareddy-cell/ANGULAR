import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';

@Injectable({
  providedIn: 'root'
})
export class BookserService {

  req=[];
msg:string=null;
grantedList=[];
  constructor(private http:HttpClient) { }
  getBookDetails()
  {
  const observable=  this.http.get('./assets/books.json');
//  const observable= JSON.parse(observe);
    return observable;
  }
  receiving(a1:Array<UserloginComponent>)
  {
  
   this.req=a1;
   console.log(this.req);
  }
  
request()
{
  console.log(this.req);
  return this.req;
}
response(msg:string, a2:Array<AdminpageComponent>)
{
this.msg=msg;
this.grantedList=a2;

}
}

