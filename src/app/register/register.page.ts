import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private Http: HttpClient, public alertController: AlertController) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  firstName: string;
  lastName: string;
  username: string;
  passwordInput: string;
  confirmedPass: string;
  age: number;

  readonly BaseURL = 'https://localhost:44336/api';
  showPassword = false;
  passwordTogleItem = 'eye';
  loginForm: FormGroup;

  error_messages = {
    fname: [
      { type: 'required', message: 'First Name is required.' },
    ],

    lname: [
      { type: 'required', message: 'Last Name is required.' }
    ],

    email: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username length.' },
      { type: 'maxlength', message: 'Username length.' },
      { type: 'required', message: 'Please enter a username email address.' }
    ],

    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password too short.' },
      { type: 'maxlength', message: 'Password length.' }
    ],
    confirmpassword: [
      { type: 'required', message: 'Confirm password is required.' },
      { type: 'minlength', message: 'Password too short.' },
      { type: 'maxlength', message: 'Password length.' },
    ],
  };

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordTogleItem == 'eye') {
      this.passwordTogleItem = 'eye-off';
    } else {
      this.passwordTogleItem = 'eye';
    }
  }

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

  register() {
    let body = {
      firstname: this.firstName,
      lastname: this.lastName,
      username: this.username,
      password: this.passwordInput,
      age: this.age
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
               this.username = '';
               this.passwordInput = '';
               this.confirmedPass = '';
             } else if (element.code == 'PasswordTooShort' || element.code == 'PasswordRequiresLower') {
              this.PassAlert();
              this.passwordInput = '';
              this.confirmedPass = '';
             }
           });
        }
       });

   }
}
