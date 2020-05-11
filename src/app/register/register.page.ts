import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  constructor(private router: Router, private Http: HttpClient, public alertController: AlertController) { }
  readonly BaseURL = 'https://localhost:44336/api';
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmedPass: string;
  age: number;


  async presentAlert() {
    const alert = await this.alertController.create({

      subHeader: 'Succesful registration!',
      message: 'You must be logged in to continueo on our app.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async DupilcateUser() {
    const alert = await this.alertController.create({

      subHeader: 'Username alredy exists!',
      message: 'Use another username.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async PassAlert() {
    const alert = await this.alertController.create({

      subHeader: 'Incorrect password',
      message: 'Passwords must be at least 6 characters and have at least one lowercase (\'a\'-\'z\').',
      buttons: ['OK']
    });

    await alert.present();
  }





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
    this.register().subscribe(
        (res: any) => {
          if (res.succeeded) {
            this.presentAlert();
            this.router.navigate(['/login']);
          } else {
            res.errors.forEach(element => {
              if (element.code == 'DuplicateUserName') {
                this.DupilcateUser();
                this.username = "";
                this.password = "";
                this.confirmedPass = "";
              } else if (element.code == 'PasswordTooShort' || element.code == 'PasswordRequiresLower') {
                this.PassAlert();
                this.password = "";
                this.confirmedPass = "";
              }
            })
          }

        }
    );
   }
}
