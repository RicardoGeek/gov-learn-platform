import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Capitulo } from 'src/app/models/capitulo';
import { Contenido } from 'src/app/models/contenido';

@Component({
  selector: 'app-curso-detalle-alumno',
  templateUrl: './curso-detalle-alumno.component.html',
  styleUrls: ['./curso-detalle-alumno.component.css'],
})
export class CursoDetalleAlumnoComponent implements OnInit {
  idCurso: string;
  displayModal: boolean;
  capitulos: Capitulo[] = [];
  contenidos: Contenido[] = [];
  isPaused: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CursosService: CursosService
  ) {}

  async ngOnInit() {
    this.idCurso = await this.route.snapshot.params.id;

    await this.route.params.subscribe((params: Params) => {
      this.idCurso = params.id;

      this.CursosService.getCapitulos(this.idCurso).subscribe((data) => {
        this.capitulos = data.capitulo;
      });
    });
  }

  contenido(id: number) {
    this.displayModal = true;
    this.CursosService.getContenidos(id).subscribe((data) => {
      this.contenidos = data.contenido;
    });
  }

  audio = new Audio();
  listen(contenido: string) {
    this.isPaused = false;
    this.CursosService.listen(contenido).subscribe((data) => {
      this.audio.src = data.file.output;
      this.audio.load();
      this.audio.play();
    });
  }

  pause() {
    this.isPaused = true;
    this.audio.pause();
  }

  play() {
    this.isPaused = false;
    this.audio.play();
  }

  stop(){
    this.isPaused = false;
    this.audio.remove();
  }
}
