import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.css'],
})
export class ConfirmUserComponent implements OnInit {
  username: String = '';
  code: String = '';
  displayModal: boolean = true;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  confirm() {
    if (this.username && this.code) {
      this.authService.confirm(this.username, this.code).subscribe((data) => {
        if (data.statusCode == 200) {
          let user = { username: this.username, rol: 'ESTUDIANTE' };
          localStorage.setItem('user', JSON.stringify(user));
          if (user.rol === 'ESTUDIANDTE') {
            this.router.navigate(['/pages']);
          } else {
            this.router.navigate(['/admin']);
          }
        }
      });
    }
  }
}
