import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.component.html',
  styleUrls: ['./dashboard-alumno.component.css'],
})
export class DashboardAlumnoComponent implements OnInit {
  menu: any = [];
  selectedMenu: any;
  visibleSidebar1: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu = [
      { name: 'Espacio de Trabajo', code: '/pages/workSpace' },
      { name: 'Cursos', code: '/pages/cursos' },
      { name: 'Mis Cursos', code: '/pages/miscursos' },
      { name: 'Cerrar Sesion', code: '1' },
    ];
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
