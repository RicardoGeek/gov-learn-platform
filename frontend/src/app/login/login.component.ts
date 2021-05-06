import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  displayModal: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe((data) => {
        if (data.status == 'success') {
          let user = {
            username: this.username,
            rol: data.result.idToken.payload['custom:rol'],
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/pages']);
        } else if (data.errorMessage == 'User is not confirmed.') {
          this.router.navigate(['/confirm']);
        } else if (data.errorMessage == 'Incorrect username or password.') {
          this.displayModal = true;
        }
      });
    }
  }
}
