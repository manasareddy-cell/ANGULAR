import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidators } from '../register/validation';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  regGroup;

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.regGroup=this.fb.group(
      {
        fn:['', [Validators.required,Validators.minLength(5)]],
        ln:['', [Validators.required,Validators.minLength(5)]],
        username:['', [Validators.required,Validators.minLength(5)]],
        pass:['', [Validators.required,Validators.minLength(5)]],
        confirmPass:['',[Validators.required]]
      },
      {validators:customValidators}
    );
  }
  submit(){
    console.log(this.regGroup.value);
    
      let userobj=JSON.stringify(this.regGroup.value);
     localStorage.setItem(this.regGroup.value.username,userobj);
     this.router.navigate(['/admin'])
      }
}
