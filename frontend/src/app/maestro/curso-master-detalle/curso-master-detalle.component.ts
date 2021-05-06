import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Capitulo } from 'src/app/models/capitulo';
import { Contenido } from 'src/app/models/contenido';

@Component({
  selector: 'app-curso-master-detalle',
  templateUrl: './curso-master-detalle.component.html',
  styleUrls: ['./curso-master-detalle.component.css']
})
export class CursoMasterDetalleComponent implements OnInit {

  idCurso: string;
  displayModal:boolean;
  capitulos: Capitulo[] = [];
  contenidos: Contenido[] = [];
  createModal: boolean;
  createModalContenido: boolean;
  newCapitulo: Capitulo = new Capitulo;
  newContenido: Contenido = new Contenido;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private CursosService: CursosService) { }

    async ngOnInit() {
      this.idCurso = await this.route.snapshot.params.id;

      await this.route.params.subscribe((params: Params) => {
        this.idCurso = params.id;

        this.CursosService.getCapitulos(this.idCurso).subscribe(data=>{
          this.capitulos = data.capitulo;
        })
      });
    }

    contenido(id:number) {
      this.displayModal = true;
      this.CursosService.getContenidos(id).subscribe(data=>{
          this.contenidos = data.contenido;
      })
    }

    openCreateModal() {
      this.createModal = true;
    }

    create() {
      if (this.newCapitulo.nombre && this.newCapitulo.descripcion){
        this.newCapitulo.id_curso = +this.idCurso;

        this.CursosService.createCapitulo(this.newCapitulo).subscribe(data=>{
          console.log(data);
          this.ngOnInit();
          this.createModal = false;
        })
      }


    }

    delete(capitulo: Capitulo) {
      this.CursosService.deleteCapitulo(capitulo).subscribe(data=>{
        this.ngOnInit();
      })
    }

    openCreateContenido(id:number){
      this.createModalContenido = true;
      this.newContenido.id_capitulo = id;
    }

    createContenido(){
      this.CursosService.createContenido(this.newContenido).subscribe(data=>{
        console.log(data);
        this.ngOnInit();
        this.createModalContenido = false;
      })
    }

    deleteContenido(contenido: Contenido){
      this.CursosService.deleteContenido(contenido).subscribe(data=>{
        this.ngOnInit();
        this.displayModal = false;
      })
    }

}
