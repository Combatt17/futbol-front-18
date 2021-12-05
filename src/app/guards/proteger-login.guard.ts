import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProtegerLoginGuard implements CanActivate, CanLoad {
  constructor(private usuarioService: UsuarioService, private router: Router){}
  
  canActivate(): Observable<boolean> |  boolean  {

    return this.usuarioService.verificarToken().pipe(
      tap(valido=>{
        console.log(valido);
        if(valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }
  
  canLoad(): Observable<boolean> | boolean {
    return this.usuarioService.verificarToken().pipe(
      tap(valido=>{
        if(valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }
}
