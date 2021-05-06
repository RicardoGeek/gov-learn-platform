import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.component.html',
  styleUrls: ['./dashboard-alumno.component.css']
})
export class DashboardAlumnoComponent implements OnInit {
  menu:any = [];
  selectedMenu: any;
  visibleSidebar1: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menu = [
      {name:"Cursos", code: "/pages/cursos"},
      {name:"Mis Cursos", code: "/pages/miscursos"},
      {name:"Asignacion", code: "/pages/asignacion"}
    ]
  }


  goTo(){
   this.router.navigate([this.selectedMenu.code]);
  }

}
