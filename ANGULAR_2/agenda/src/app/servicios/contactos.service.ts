import {Injectable } from "@angular/core";
import { Contacto } from '../Ejemplos/entidades/contacto';

@Injectable()
export class ContactosService {

    obtenerContactos(): Array<Contacto> {
        return [
            {
            nombre: 'Steve Jobs',
            email: 'steve.jobs@apple.com',
            telefono: '987654321'
            },
            {
            nombre: 'Bill Gates',
            email: 'bill.gates@microsoft.com',
            telefono: '1234456789'
            },
            {
            nombre: 'Elon Musk',
            email: 'elon.musk@tesla.com',
            telefono: '123987465'
            }
         ]
    }


}