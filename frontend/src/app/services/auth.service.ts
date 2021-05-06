import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl: string = "https://0j0bpb4f3d.execute-api.us-east-1.amazonaws.com/prod/register";
  confirmUrl: string = "https://0j0bpb4f3d.execute-api.us-east-1.amazonaws.com/prod/confirm";
  loginUrl: string = "https://0j0bpb4f3d.execute-api.us-east-1.amazonaws.com/prod/login";
  constructor(private http: HttpClient) { }


  httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  register(user: User): Observable<any>{
    return this.http.post(this.registerUrl, user, this.httpOptions());
  }

  confirm(username: String, code: String): Observable<any>{
    return this.http.post(this.confirmUrl, {username: username, confirmacion: code}, this.httpOptions());
  }

  login(username: String, pass: String):  Observable<any>{
    return this.http.post(this.loginUrl, {username: username, password: pass}, this.httpOptions());
  }

}
