import {Injectable, Inject } from "@angular/core";
import { Contacto } from '../Ejemplos/entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { Direcciones } from '../configuracion/direcciones';

@Injectable()
export class ContactosService {
    /*
    Creamos esta clase para añadir una capa de abstracción más.
    Su función es realizar peticiones, recoger la información y mandársela debidamente a los componentes concretos.
    Ejemplos:
    Un método que hace una petición get para obtener todos los productos de la bd
    Al componente que debe mostrar esa lista le pasarás un observable de una lista de productos
    */ 



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
               return rutaAvatar;
           }).share(); //Si te subscribes a un evento dos veces desde dos puntos distintos del código
                        // lo que ocurrirá será que se harán dos peticiones y te llegarán 2 respuestas a cada sitio donde te hayas subscrito
                        // Para solucionar esto puedes utilizar share() o desubscribirte cuando hayas acabado
       
    }


    // Creamos un contacto en el servidor
    guardarContacto(contacto: Contacto): Observable<Contacto> {

        return this._http
        .post(`${this._direcciones.servidor}/contactos`, contacto)
        .map(res => Contacto.desdeJSON(res.json()));
    }



    // eliminamos un contacto del servidor
    eliminarContacto(contacto: Contacto): Observable<any> {
        return this._http
        .delete(`${this._direcciones.servidor}/contactos/${contacto.id}`);
    } 

    // Actualizamos un contacto en el servidor
    editarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
        .put(`${this._direcciones.servidor}/contactos/${contacto.id}`, contacto)
        .map(res => Contacto.desdeJSON(res.json()));
        
    }


}