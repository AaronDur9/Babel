import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Contacto } from '../Ejemplos/entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent{
    

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();


    rutaAvatar: string = '';

    constructor(private _contactosService: ContactosService) {}

    ngOnInit() {
        this._contactosService
        .generarRutaAvatar()
        .subscribe(ruta => {
            this.rutaAvatar = ruta;
        });
    }


 
    notificarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);

    }
}