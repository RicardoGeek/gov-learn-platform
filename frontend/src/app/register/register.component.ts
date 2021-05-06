import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (
      this.user.email &&
      this.user.username &&
      this.user.password &&
      this.user.name
    ) {
      this.user.rol = 'ESTUDIANDTE';
      this.authService.register(this.user).subscribe((data) => {
        if (data.statusCode == 200) {
          this.router.navigate(['/confirm']);
        }
      });
    }
  }
}
