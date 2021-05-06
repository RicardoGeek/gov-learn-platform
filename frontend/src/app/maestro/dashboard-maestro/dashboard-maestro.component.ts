import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-maestro',
  templateUrl: './dashboard-maestro.component.html',
  styleUrls: ['./dashboard-maestro.component.css'],
})
export class DashboardMaestroComponent implements OnInit {
  menu: any = [];
  selectedMenu: any;
  visibleSidebar1: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu = [{ name: 'Cursos', code: '/admin/cursosAdmin' },
    { name: 'Cerrar Sesion', code: '1' },];
  }

  goTo() {
    if (this.selectedMenu.code === '1') {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([this.selectedMenu.code]);
    }
  }
}
