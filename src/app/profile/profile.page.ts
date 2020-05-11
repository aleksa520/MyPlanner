import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firstName: string = "Laki";
  lastName: string = "Miric";
  username: string = "sisica";
  password: string = "jasampeder";
  age: number = 20;
  show: boolean = false;
  showPassword = false;
  passwordTogleItem = "eye";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
    if(this.passwordTogleItem == "eye"){
      this.passwordTogleItem = "eye-off";
    }else{
      this.passwordTogleItem = "eye";
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
