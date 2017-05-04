import { Component, Input} from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';


@Component({
    selector: 'detalles-contacto',
    templateUrl: '/app/detalles-contacto/detalles-contacto.component.html'
})

export class DetallesContactoComponent{


    @Input() contacto:Contacto;
}