import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registrarse',
    component: RegistrarComponent
  },
  {
    path:'inicio',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
