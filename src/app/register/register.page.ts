import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router) { }

  firstName:string;
  lastName:string;
  username:string;
  password:string;
  confirmedPass:string;
  age:number;

  ngOnInit() {
  }
  
  goBack(){
    this.router.navigate(['/login']);
  }

  createAccount(){
    console.log(this.firstName + " " + this.lastName + " " + this.username + " " + this.password + " " + this.age );
  }

}
