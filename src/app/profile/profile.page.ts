import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {




  constructor(private router: Router, private Http: HttpClient) { }
  userDetails;
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

  firstName: string = "this.userDetails.firstName"
  lastName: string = "Miric";
  username: string = "sisica";
  password: string = "sifra";
  age: number = 20;
  show: boolean = false;
  showPassword = false;
  passwordTogleItem = "eye";

  togglePassword(){
    this.showPassword = !this.showPassword;
    if(this.passwordTogleItem == "eye"){
      this.passwordTogleItem = "eye-off";
    }else{
      this.passwordTogleItem = "eye";
    }
  }
  getUserProfile() {
    return this.Http.get('https://localhost:44336/api/UserProfile');

  }

  goBack() {
    this.router.navigate(['/home']);
  }



}
