import { Component } from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import {Router} from '@angular/router';


@Component({
    template: `
    <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>`
})
export class NuevoContactoComponent{

constructor(private _contactosService: ContactosService,
            private _router: Router) {}

  //Formulario-contacto llama a este método cuando pulsan el botón de añadir contacto
  guardarContacto(contacto: Contacto): void {
    this._contactosService
      .guardarContacto(contacto)
      .subscribe(contacto => {
      //Una vez que se ha creado el contacto navegamos a mis-contactos para poder verlo
      this._router.navigate(['mis-contactos'])

      });
    }

}