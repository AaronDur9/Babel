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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var contacto_1 = require("../Ejemplos/entidades/contacto");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var direcciones_1 = require("../configuracion/direcciones");
var ContactosService = (function () {
    /*
    Creamos esta clase para añadir una capa de abstracción más.
    Su función es realizar peticiones, recoger la información y mandársela debidamente a los componentes concretos.
    Ejemplos:
    Un método que hace una petición get para obtener todos los productos de la bd
    Al componente que debe mostrar esa lista le pasarás un observable de una lista de productos
    */
    function ContactosService(_http, _direcciones) {
        this._http = _http;
        this._direcciones = _direcciones;
    }
    //Recuperamos la lista de contactos del servidor
    ContactosService.prototype.obtenerContactos = function () {
        return this._http
            .get(this._direcciones.servidor + "/contactos")
            .map(function (res) {
            // Obtengo la lista de objetos que viene en el body
            var lista = res.json();
            // Creo una lista de contactos y la devuelvo 
            return lista.map(function (elemento) {
                return contacto_1.Contacto.desdeJSON(elemento);
            });
        });
    };
    ContactosService.prototype.generarRutaAvatar = function () {
        //http://faker.hook.io
        return this._http
            .get("" + this._direcciones.faker)
            .map(function (res) {
            var rutaAvatar = res.text();
            rutaAvatar = rutaAvatar.replace(new RegExp('\"', 'g'), '');
            return rutaAvatar;
        }).share(); //Si te subscribes a un evento dos veces desde dos puntos distintos del código
        // lo que ocurrirá será que se harán dos peticiones y te llegarán 2 respuestas a cada sitio donde te hayas subscrito
        // Para solucionar esto puedes utilizar share() o desubscribirte cuando hayas acabado
    };
    // Creamos un contacto en el servidor
    ContactosService.prototype.guardarContacto = function (contacto) {
        return this._http
            .post(this._direcciones.servidor + "/contactos", contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    // eliminamos un contacto del servidor
    ContactosService.prototype.eliminarContacto = function (contacto) {
        return this._http
            .delete(this._direcciones.servidor + "/contactos/" + contacto.id)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    // Actualizamos un contacto en el servidor
    ContactosService.prototype.editarContacto = function (contacto) {
        return this._http
            .put(this._direcciones.servidor + "/contactos/" + contacto.id, contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(direcciones_1.Direcciones)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map