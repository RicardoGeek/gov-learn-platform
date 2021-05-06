import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get(this.urlBase + 'curso/capitulos/' + id, this.httpOptions());
  }

  getContenidos(id: number): Observable<any> {
    return this.http.get(this.urlBase + 'curso/capitulo/' + id + '/contenido', this.httpOptions());
  }
}
