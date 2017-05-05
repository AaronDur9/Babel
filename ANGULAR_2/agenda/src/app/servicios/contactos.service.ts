import {Injectable } from "@angular/core";
import { Contacto } from '../Ejemplos/entidades/contacto';

@Injectable()
export class ContactosService {

    obtenerContactos(): Array<Contacto> {
        return [
            Contacto.desdeJSON({
            id: 1,
            nombre: 'Steve',
            apellidos: 'Jobs',
            email: 'steve.jobs@apple.com',
            telefono: '987654321',
            twitter: 'Turing`s_apple',
            facebook: 'stevie',
            avatar: ''
            }),
            Contacto.desdeJSON({
            id: 2,
            nombre: 'Bill',
            apellidos: 'Gates',
            email: 'bill.gates@microsoft.com',
            telefono: '1234456789',
            twitter: 'Bill_El_Privativo',
            facebook: 'billgates',
            avatar: ''
            }),
            Contacto.desdeJSON({
            id: 3,
            nombre: 'Elon',
            apellidos: 'Musk',
            email: 'elon.musk@tesla.com',
            telefono: '123987465',
            twitter: 'Musk_Norris',
            facebook: 'MuskNorris',
            avatar: ''
            })
         ]
    }


}