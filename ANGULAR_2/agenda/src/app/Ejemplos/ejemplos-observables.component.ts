import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { RequestOptions, Jsonp, Response, URLSearchParams } from '@angular/http';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'ejemplos-observables',
    template: ''
})

export class EjemplosObservablesComponent {
      




    private _miObservable$: Observable<any> = 
    Observable.create((observador: Observer<any>) => {
        // Con el observador puedo emitir valores, errores o decir que he terminado
        console.log('voy a emitir');
        observador.next('Buenos días');
        
        /*
        // emitimos un error
        observador.error('Se paró la pianola');
        // después del error no se pueden mandar más mensajes ni eventos (Tampoco se enviaría el complete())
        observador.next('Otro mensaje tras el error');
        */

        // Indicamos que he terminado
        observador.complete();
    });
    
    constructor() {
        this._miObservable$.subscribe(dato => {
            //Función que se ejecuta cuando el observador emite un next()
            console.log(`Dato recibido desde el observable (next) ${dato}`);
        }, error => {
            //Función que se ejecuta cuando el observador emite un error()
            console.error(`Dato de error: ${error}`);
        },
        () => {
            //Función que se ejecuta cuando el observador emite un complete()
            console.log('He terminado');
        });
     }


}


// Ejemplo de obsaervables con operadores
@Component({
    selector: 'ejemplos-observables-wikipedia',
    template: `
        <div>
            <input (input)="buscarWikipedia($event)"/>
            <ul>
                <li *ngFor="let resultado of resultados">
                {{ resultado }}
                </li>
            </ul>
        </div>
    `
})
export class EjemplosObservablesWikipediaComponent implements OnDestroy {
        


    private _flujoDeDatosCajaTexto: Subject<string> = new Subject();
    resultados: string[];
    _suscripcionCajaTexto: Subscription;
    //_suscripcionCajaTexto: any;

    // Como nos subscribimos en el constructor
    // Nos desubscribiremos en el destructor
    constructor(private _jsonp: Jsonp) {
        this._flujoDeDatosCajaTexto
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((palabra: string) => this.peticionBusqueda(palabra))
            .subscribe(resultados => {
                this.resultados = resultados;
            });
        }

    

  


    
    buscarWikipedia(evento: KeyboardEvent) {
        // hacemos emisión de eventos
        

        // Para indicar el tipo de target en medio de una instrucción
        const datoAEmitir = (evento.target as HTMLInputElement).value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    }


    peticionBusqueda(palabra: string): Observable<any> {
        const parametros: URLSearchParams = new URLSearchParams();
        //Estos parametros.set están incluyendo parámetros en la url
        //http://algo/?search=palabra&action=opensearch...
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');

        let opciones: RequestOptions = new RequestOptions();
        opciones.search = parametros;

        return this._jsonp
                    .get('http://en.wikipedia.org/w/api.php', opciones)
                    .map((respuesta: Response) => {
                        return respuesta.json()[1];
                    });
        }


  ngOnDestroy(): void {
               // Nos desuscribimos del observable
            this._suscripcionCajaTexto.unsubscribe();  
        }
}