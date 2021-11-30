import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private peticion: HttpClient) { }

  traerEquipos(){
    return this.peticion.get('http://localhost:8080/api/equipos')
  }

  guardarEquipo(datos:any){
    return this.peticion.post('http://localhost:8080/api/equipos',datos)
  }
}
