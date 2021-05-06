import { Capitulo } from './../models/capitulo';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Contenido } from '../models/contenido';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  urlBase: string = environment.urlBackend;
  constructor(private http: HttpClient) {}

  httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllCursos(): Observable<any> {
    return this.http.get(this.urlBase + 'cursos', this.httpOptions());
  }

  asignar(id_curso): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user')).username;

    return this.http.post(
      this.urlBase + 'asignar',
      { username: user, curso: id_curso },
      this.httpOptions()
    );
  }

  getMyCursos(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user')).username;

    return this.http.get(
      this.urlBase + 'cursos/asignados/' + user,
      this.httpOptions()
    );
  }

  getCapitulos(id: string): Observable<any> {
    return this.http.get(
      this.urlBase + 'curso/capitulos/' + id,
      this.httpOptions()
    );
  }

  getContenidos(id: number): Observable<any> {
    return this.http.get(
      this.urlBase + 'curso/capitulo/' + id + '/contenido',
      this.httpOptions()
    );
  }

  createCurso(curso: Curso): Observable<any> {
    return this.http.post(this.urlBase + 'curso', curso, this.httpOptions());
  }

  deleteCurso(curso: Curso): Observable<any> {
    return this.http.request('DELETE', this.urlBase + 'curso', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: curso,
    });
  }

  createCapitulo(capitulo: Capitulo): Observable<any> {
    return this.http.post(this.urlBase + 'curso/capitulo', capitulo, this.httpOptions());
  }

  deleteCapitulo(capitulo: Capitulo): Observable<any> {
    return this.http.request('DELETE', this.urlBase + 'curso/capitulo', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: capitulo,
    });
  }

  createContenido(contenido: Contenido): Observable<any> {
    return this.http.post(this.urlBase + 'curso/capitulo/contenido', contenido, this.httpOptions());
  }

  deleteContenido(contenido: Contenido): Observable<any> {
    return this.http.request('DELETE', this.urlBase + 'curso/capitulo/contenido', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: contenido,
    });
  }
}
