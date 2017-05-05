import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CajaComponent} from './Ejemplos/caja.component';
import { EjemplosBindingComponent } from './Ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './Ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { Servicio1, EjemplosInyeccionComponent, Servicio2Provider } from './Ejemplos/ejemplos-inyeccion.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';


//Con esta línea añades un breakpoint a tu código
//debugger;

//@... es un decorador
//En la parte de los decoradores incluiremos el código que angular necesita para ejecutar nuestro componente

@NgModule({
  imports:      [ // Metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule
     ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
     AppComponent,
     CajaComponent,
     EjemplosBindingComponent,
     EjemplosComponentesComponent,
     ListaContactosComponent,
     DetallesContactoComponent,
     EjemplosInyeccionComponent,
     FormularioContactoComponent
     ],
     providers: [ // Metemos los servicios
      ContactosService,
      Servicio1,
      Servicio2Provider
     ],
  bootstrap:    [ AppComponent ] //Componente principal de nuestra app
})
//El comportamiento real de nuestro componente lo incluiremos de manera normal, en la clase.
export class AppModule { }
