"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var EjemplosObservablesComponent = (function () {
    function EjemplosObservablesComponent() {
        this._miObservable$ = Observable_1.Observable.create(function (observador) {
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
        this._miObservable$.subscribe(function (dato) {
            //Función que se ejecuta cuando el observador emite un next()
            console.log("Dato recibido desde el observable (next) " + dato);
        }, function (error) {
            //Función que se ejecuta cuando el observador emite un error()
            console.error("Dato de error: " + error);
        }, function () {
            //Función que se ejecuta cuando el observador emite un complete()
            console.log('He terminado');
        });
    }
    return EjemplosObservablesComponent;
}());
EjemplosObservablesComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], EjemplosObservablesComponent);
exports.EjemplosObservablesComponent = EjemplosObservablesComponent;
// Ejemplo de obsaervables con operadores
var EjemplosObservablesWikipediaComponent = (function () {
    //_suscripcionCajaTexto: any;
    // Como nos subscribimos en el constructor
    // Nos desubscribiremos en el destructor
    function EjemplosObservablesWikipediaComponent(_jsonp) {
        var _this = this;
        this._jsonp = _jsonp;
        this._flujoDeDatosCajaTexto = new Subject_1.Subject();
        this._flujoDeDatosCajaTexto
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (palabra) { return _this.peticionBusqueda(palabra); })
            .subscribe(function (resultados) {
            _this.resultados = resultados;
        });
    }
    EjemplosObservablesWikipediaComponent.prototype.buscarWikipedia = function (evento) {
        // hacemos emisión de eventos
        // Para indicar el tipo de target en medio de una instrucción
        var datoAEmitir = evento.target.value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    };
    EjemplosObservablesWikipediaComponent.prototype.peticionBusqueda = function (palabra) {
        var parametros = new http_1.URLSearchParams();
        //Estos parametros.set están incluyendo parámetros en la url
        //http://algo/?search=palabra&action=opensearch...
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');
        var opciones = new http_1.RequestOptions();
        opciones.search = parametros;
        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map(function (respuesta) {
            return respuesta.json()[1];
        });
    };
    EjemplosObservablesWikipediaComponent.prototype.ngOnDestroy = function () {
        // Nos desuscribimos del observable
        this._suscripcionCajaTexto.unsubscribe();
    };
    return EjemplosObservablesWikipediaComponent;
}());
EjemplosObservablesWikipediaComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables-wikipedia',
        template: "\n        <div>\n            <input (input)=\"buscarWikipedia($event)\"/>\n            <ul>\n                <li *ngFor=\"let resultado of resultados\">\n                {{ resultado }}\n                </li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], EjemplosObservablesWikipediaComponent);
exports.EjemplosObservablesWikipediaComponent = EjemplosObservablesWikipediaComponent;
//# sourceMappingURL=ejemplos-observables.component.js.map