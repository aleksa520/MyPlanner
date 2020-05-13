import { OnInit, Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userDetails;

  constructor(private router: Router, private Http: HttpClient) {}

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

  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

   getUserProfile() {
   return this.Http.get('https://localhost:44336/api/UserProfile');

  }
  myprofile() {
    this.router.navigate(['/profile']);
  }

}
