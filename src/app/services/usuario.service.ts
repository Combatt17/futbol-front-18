import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private peticion: HttpClient) { }

  //Registrar un nuevo usuario
  registrarUsuarios(datos:any){
     return this.peticion.post('http://localhost:8080/api/usuarios',datos)
  }

  //Inicio de sesión
  ingresar(datosLogin:any){
    return this.peticion.post('http://localhost:8080/api/usuarios/login',datosLogin)
    .pipe(
      tap((respuesta:any) => {
        if(respuesta.mensaje=="Se accedió correctamente"){
          localStorage.setItem("token",respuesta.hash);
        }
      }),
      map(respuesta => respuesta )
    )
  }
}
