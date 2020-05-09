import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private Http: HttpClient) { }
  readonly BaseURL = 'https://localhost:44336/api';
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmedPass: string;
  age: number;

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  createAccount() {
    console.log(this.firstName + ' ' + this.lastName + ' ' + this.username + ' ' + this.password + ' ' + this.age );
  }

  register() {
    var body = {
      firstname : this.firstName,
      lastname : this.lastName,
      username : this.username,
      password : this.password,
      age : this.age
    };
    return this.Http.post(this.BaseURL + '/User/Register', body);
  }
   onsubmit() {
    this.register().subscribe();
   }
}
