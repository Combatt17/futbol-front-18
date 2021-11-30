import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private peticion: HttpClient) { }

  guardarPartido(datos:any){
    return this.peticion.post('http://localhost:8080/api/partidos',datos)
  }

  traerPartidos(){
    return this.peticion.get('http://localhost:8080/api/partidos')
  }

  actualizarPartido(info:any){
    return this.peticion.put('http://localhost:8080/api/equipos',info)
  }
  
}
