import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';


//Con esta línea añades un breakpoint a tu código
//debugger;

//@... es un decorador
//En la parte de los decoradores incluiremos el código que angular necesita para ejecutar nuestro componente

@NgModule({
  imports:      [ // Metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule
     ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
     AppComponent 
     ],
     providers: [ // Metemos los servicios

     ],
  bootstrap:    [ AppComponent ] //Componente principal de nuestra app
})
//El comportamiento real de nuestro componente lo incluiremos de manera normal, en la clase.
export class AppModule { }
