import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  cursos: Curso[] = [];
  constructor(private cursosService: CursosService,
    private route: Router) {
    this.cursosService.getMyCursos().subscribe(data => {
      this.cursos = data.cursos;
    })
  }

  ngOnInit(): void {
  }

  ver(id: number) {
    this.route.navigate(['/pages/cursoDetalle/' + id])
  }
}
