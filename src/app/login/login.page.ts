import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  username:string;
  password:string;

  login(){
    console.log(this.username + " " + this.password);
    this.router.navigate(['/home']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}
