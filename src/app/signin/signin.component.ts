import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl()
    }
  )
  constructor(private Router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.value.email=="khushi" && this.loginForm.value.password=="123")
    {
      //console.log("Successful")
      this.toastr.error('Hello world!', 'Toastr fun!');
    }
    else{
      console.log("Invalid email and password")
    }
  }

}
