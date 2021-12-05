import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private peticion: HttpClient) { }

    
    /**
     * Se construye la cabecera de la petición y se envia el token
     */
    get headers(){
      return {headers: {'Content-Type': 'application/json'}}
    }
  


  //Registrar un nuevo usuario
  registrarUsuarios(datos:any){
     return this.peticion.post('http://localhost:8080/api/usuarios',datos)
  }

  //Inicio de sesión
  ingresar(datosLogin:any){
    return this.peticion.post('http://localhost:8080/api/usuarios/login',datosLogin,this.headers)
    .pipe(
      tap((respuesta:any) => {
        if(respuesta.mensaje=="Se accedió correctamente"){
          localStorage.setItem("token",respuesta.hash);
        }
      }),
      map(respuesta => respuesta )
    )
  }
  
  /**
   * Obtiene el Token guardado en el Localstorage, de no se así 
   * se devuelve un String vacio
   */
   getToken(){
    return localStorage.getItem('token')||'';
  }


  get auto(){
    return {headers: {'Authorization': this.getToken()}}
  }

  verificarToken():Observable<boolean>{
    return this.peticion.get('http://localhost:8080/api/verificar',
    this.auto).pipe(
      map((respuesta:any) => {
        console.log(respuesta);
        if (respuesta.ok){
          return respuesta.ok;
        }
      }),
      catchError(err => of(false))
    )
  }

}
