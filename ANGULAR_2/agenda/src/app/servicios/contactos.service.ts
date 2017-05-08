import {Injectable, Inject } from "@angular/core";
import { Contacto } from '../Ejemplos/entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Direcciones } from '../configuracion/direcciones';

@Injectable()
export class ContactosService {

    constructor(private _http: Http,
                @Inject(Direcciones) private _direcciones: any) {}

    //Recuperamos la lista de contactos del servidor
    obtenerContactos(): Observable<Array<Contacto>> {
        return this._http
        .get(`${this._direcciones.servidor}/contactos`)
        .map(res => {
            // Obtengo la lista de objetos que viene en el body
            const lista: any[] =  res.json();
            // Creo una lista de contactos y la devuelvo 
            return lista.map(elemento => {
                return Contacto.desdeJSON(elemento);
            });
        });
    }


       generarRutaAvatar(): Observable<string> {
           //http://faker.hook.io
           return this._http
           .get(`${this._direcciones.faker}`)
           .map( res => {
               let rutaAvatar = res.text();
               rutaAvatar = rutaAvatar.replace(new RegExp('\"', 'g'), '');
               console.log(res);
               return rutaAvatar;
           });
    }


    // Creamos un contacto en el servidor
    guardarContacto(contacto: Contacto): Observable<Contacto> {

        return this._http
        .post(`${this._direcciones.servidor}/contactos`, contacto)
        .map(res => Contacto.desdeJSON(res.json()));
    }



    // eliminamos un contacto del servidor
    eliminarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
        .delete(`${this._direcciones.servidor}/contactos/${contacto.id}`)
        .map(res => Contacto.desdeJSON(res.json()));

    } 

    // Actualizamos un contacto en el servidor
    editarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
        .put(`${this._direcciones.servidor}/contactos/${contacto.id}`, contacto)
        .map(res => Contacto.desdeJSON(res.json()));
        
    }


}