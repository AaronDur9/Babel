import { Component, Injectable } from '@angular/core';

// Inyección de dependencias usando decorador
@Injectable()
export class Servicio1 {
    obtenerMensaje(): string { return 'Soy un servicio decorado con @Inyector';}
}


//Inyección usando un custom provider
export class Servicio2 {
    obtenerMensaje(): string { return 'Soy un servicio que usa proveedor de clase';}
}



export const Servicio2Provider = {
    provide: Servicio2, //Cuando nos pidan Servicio2
    useClass: Servicio2 //Devolvemos la clase Servicio2
};


@Component({
    selector: 'ejemplos-inyeccion',
    templateUrl: './ejemplos-inyeccion.component.html'
})
export class EjemplosInyeccionComponent {

    mensaje1: string;
    mensaje2: string;

    constructor(private _servicio1: Servicio1, private _servicio2: Servicio2){}

    ngOnInit() {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
    }
}