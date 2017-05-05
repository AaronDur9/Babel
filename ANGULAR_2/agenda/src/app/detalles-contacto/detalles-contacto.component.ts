import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';


@Component({
    selector: 'detalles-contacto',
    templateUrl: '/app/detalles-contacto/detalles-contacto.component.html',
    styleUrls: ['app/detalles-contacto/detalles-contacto.component.css']
})

export class DetallesContactoComponent{


    @Input() contacto:Contacto;

    //Eventos que lanzamos para que el componente principal sepa que han pulsado en los botones
    @Output() verFacebook: EventEmitter<string> = new EventEmitter();
    @Output() verTwitter: EventEmitter<string> = new EventEmitter();


    notificarFacebook() {
        this.verFacebook.emit(this.contacto.generarRutaFacebook());

    }

    notificarTwitter() {
        this.verTwitter.emit(this.contacto.generarRutaTwitter());

    }
}