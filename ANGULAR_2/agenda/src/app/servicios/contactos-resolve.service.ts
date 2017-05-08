import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Contacto } from '../Ejemplos/entidades/contacto';
import { Observable } from 'rxjs/Observable';
import { ContactosService } from './contactos.service';


@Injectable()
export class ContactosResolve implements Resolve<Contacto[]> {

    constructor(private _contactosService: ContactosService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]> {
        return this._contactosService.obtenerContactos();
    }

}