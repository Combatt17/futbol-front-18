import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private peticion: HttpClient) { }


  /**
   * Obtiene el Token guardado en el Localstorage, de no se así 
   * se devuelve un String vacio
   */
  getToken(){
    return localStorage.getItem('token')||'';
  }

  /**
   * Se construye la cabecera de la petición y se envia el token
   */
  get headers(){
    return {headers: {'Authorization': this.getToken()}}
  }

  traerEquipos(){
    return this.peticion.get('http://localhost:8080/api/equipos',this.headers)
  }

  guardarEquipo(datos:any){
    return this.peticion.post('http://localhost:8080/api/equipos',datos,this.headers)
  }

}



