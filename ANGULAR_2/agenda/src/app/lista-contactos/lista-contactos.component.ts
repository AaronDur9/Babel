import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';


@Component({
    selector: 'lista-contactos',
    templateUrl: './lista-contactos.component.html',
    styleUrls: ['./lista-contactos.component.css']
})

export class ListaContactosComponent {
    
    @Input() contactos: Contacto[];

    //Creamos este evento que lo lanzaremos cuando hagan click en un contacto
    @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();


    notificarContactoSeleccionado(contacto: Contacto): void {
        this.seleccionado.emit(contacto);    
    }

}