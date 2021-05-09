import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  english: string = "";
  spanish: string = "";
  constructor(private service: CursosService) { }

  ngOnInit(): void {
  }

  translate() {
    this.service.translate(this.spanish).subscribe(data=>{
      this.english = data.traduccion.TranslatedText;
    })
  }

}
