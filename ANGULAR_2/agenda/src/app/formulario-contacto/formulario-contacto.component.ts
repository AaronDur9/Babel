import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Contacto } from '../Ejemplos/entidades/contacto';


@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent{
    

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    notificarContacto(contactoForm: FormGroup) {
        console.log(contactoForm.value);
        const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
        
        this.formularioAceptado.emit(contacto);

    }
}