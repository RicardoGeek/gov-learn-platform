import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  displayModal: boolean;
  displayModalError: boolean;
  constructor(private cursoService: CursosService) {
    this.cursoService.getAllCursos().subscribe((data) => {
      this.cursos = data.cursos;
    });
  }

  ngOnInit(): void {}

  asignar(id: number) {
    this.cursoService.asignar(id).subscribe(
      (data) => {
        if (data.status == 'ok') {
          this.displayModal = true;
        }
      },
      (error) => (this.displayModalError = true)
    );
  }
}
