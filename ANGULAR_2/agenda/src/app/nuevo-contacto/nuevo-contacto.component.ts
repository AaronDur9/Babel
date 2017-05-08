import { Component } from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
@Component({
    template: `
    <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>`
})
export class NuevoContactoComponent{

constructor(private _contactosService: ContactosService) {}

  guardarContacto(contacto: Contacto): void {
    this._contactosService.guardarContacto(contacto)
    .subscribe(contacto => alert('creado'));
  }

}