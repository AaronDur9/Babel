import {Injectable } from "@angular/core";
import { Contacto } from '../Ejemplos/entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactosService {

    constructor(private _http: Http) {}

    obtenerContactos(): Observable<Array<Contacto>> {
        return this._http
        .get('http://localhost:3004/contactos')
        .map(res => {
            // Obtengo la lista de objetos que viene en el body
            const lista: any[] =  res.json();
            // Creo una lista de contactos y la devuelvo 
            return lista.map(elemento => {
                return Contacto.desdeJSON(elemento);
            });
        });
    }



    guardarContacto(contacto: Contacto): Observable<Contacto> {

        return this._http
        .post('http://localhost:3004/contactos', contacto)
        .map(res => Contacto.desdeJSON(res.json()));
    }


}