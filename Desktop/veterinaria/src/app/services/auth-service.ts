import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from "firebase/auth";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuario: User | null = null;
  private auth= getAuth();

  login (email: string, password: string) {
    //metodo firebase auth que permite inicar sesion con email y contraseña
    signInWithEmailAndPassword(this.auth, email, password)
    //Ejecutar cuando inicia sesion correctamente
    .then(usuarioAutenticado => this.usuario = usuarioAutenticado.user  )
    //Ejecutar cuando hay un error al iniciar sesion
    .catch(error =>
      console.log("Usuario o contraseña incorrectos", error.message)
    );
}
logout(){
  signOut(this.auth)
  this.usuario = null; 
}
}