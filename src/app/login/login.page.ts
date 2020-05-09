import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private Http: HttpClient) { }
  readonly BaseURL = 'https://localhost:44336/api';
  ngOnInit() {
    if(localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  username:string;
  password:string;

  login1(){
    console.log(this.username + " " + this.password);
    this.router.navigate(['/home']);
  }
  login(){
    var body = {
      username : this.username,
      password : this.password
    };
    return this.Http.post(this.BaseURL + '/User/Login', body);
  }
  onlogin() {
    this.login().subscribe(
        (res:any) => {
          localStorage.setItem('token',res.token);
          this.router.navigateByUrl('/home');
        },
        err => {
          if (err.status == 400){
            console.log(err);
          }
        }


    );
  }

  register(){
    this.router.navigate(['/register']);
  }

}
