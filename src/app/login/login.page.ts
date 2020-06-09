import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private Http: HttpClient, public alertController: AlertController) { }
  readonly BaseURL = 'https://localhost:44336/api';

  username: string;
  password: string;
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  async loginAlert() {
    const alert = await this.alertController.create({

      subHeader: 'Login failed!',
      message: 'Username and password dont match.',
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
    let body = {
      username : this.username,
      password : this.password
    };
    return this.Http.post(this.BaseURL + '/User/Login', body);
  }
  onlogin() {
    this.login().subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          console.log('token postavljen');
          this.router.navigateByUrl('/home');
          console.log('token postavljen2');
        },
        err => {
          if (err.status == 400) {
            this.loginAlert();
          }
        }


    );
  }

  register() {
    this.router.navigate(['/register']);
  }

}
