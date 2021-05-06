import { Router } from '@angular/router';
import { CursosService } from './../../services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-master',
  templateUrl: './cursos-master.component.html',
  styleUrls: ['./cursos-master.component.css']
})
export class CursosMasterComponent implements OnInit {

  cursos: Curso[] = [];
  createModal: boolean;
  newCurso: Curso = new Curso;
  constructor(private cursoService: CursosService,
    private route: Router) {

  }

  ngOnInit(): void {
    this.cursoService.getAllCursos().subscribe((data) => {
      this.cursos = data.cursos;
    });
  }

  ver(id:number){
    this.route.navigate(['/admin/cursoDetalleAdmin/' + id])
  }


  openCreateModal() {
    this.createModal = true;
  }
  create() {
    if (this.newCurso.descripcion && this.newCurso.nombre && this.newCurso.owner){
      this.cursoService.createCurso(this.newCurso).subscribe(data=>{
        console.log(data);
        this.ngOnInit();
        this.createModal = false;
      })
    }


  }

  delete(curso: Curso) {
    this.cursoService.deleteCurso(curso).subscribe(data=>{
      this.ngOnInit();
    })
  }

}
