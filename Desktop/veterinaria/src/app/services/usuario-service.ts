import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);
  private API_FIREBASE = 'https://comemtarios-cd474-default-rtdb.firebaseio.com/';

  //Metodo get
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ [key: string]: Usuario }>(`${this.API_FIREBASE}/users.json`).pipe(
      map(respuestaFirebase => {
        if (!respuestaFirebase) {
          return [];
        }
        return Object.keys(respuestaFirebase).map(id => {
          const usuarioConId = { ...respuestaFirebase[id], id: id };
          return usuarioConId;
        })
      })
    )
  }

  //Metodo post
  postUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_FIREBASE}/users.json`,usuario);
  }

  //Metodo PUT
  putUsuario(id:string, usuario:Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_FIREBASE}/users/${id}.json`,usuario);
  }

  //Metodo delete}
  deleteUsuario(id:string):Observable<void> {
    return this.http.delete<void>(`${this.API_FIREBASE}/users/${id}.json`);
  }

}
