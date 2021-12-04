import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http' //Modulo para utilizar el Cliente Http
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Modulo para formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './principal/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
