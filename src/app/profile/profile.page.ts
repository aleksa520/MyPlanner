import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {




  constructor(private router: Router, private Http: HttpClient) { }
  userDetails;

  firstName: string;
  lastName: string;
  username = 'sisica';
  password = 'sifra';
  age: number;
  show = false;
  showPassword = false;
  passwordTogleItem = 'eye';
  ngOnInit() {
    this.getUserProfile().subscribe(
        res => {
          this.userDetails = res;
        },
        err => {
          console.log(err);
        },
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordTogleItem == 'eye') {
      this.passwordTogleItem = 'eye-off';
    } else {
      this.passwordTogleItem = 'eye';
    }
  }
  getUserProfile() {
    return this.Http.get('https://localhost:44336/api/UserProfile');

  }

  goBack() {
    this.router.navigate(['/home']);
  }
 onsubmit(){
   var body = {
     FirstName : this.firstName,
     LastName : this.lastName,
     Age: this.age
   };
   console.log(body);
 }
  clearLn(){
    this.userDetails.lastName = '';
  }
  clearFn(){
    this.userDetails.firstName = '';
  }
  clearAge(){
    this.userDetails.age = '';
  }



}
