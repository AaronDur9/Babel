"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mis_contactos_component_1 = require("./mis-contactos/mis-contactos.component");
var nuevo_contacto_component_1 = require("./nuevo-contacto/nuevo-contacto.component");
var contactos_resolve_service_1 = require("./servicios/contactos-resolve.service");
// Definimos la colección de rutas de nuestra aplicación
var rutas = [
    {
        path: 'mis-contactos',
        component: mis_contactos_component_1.MisContactosComponent,
        //Antes de mostrar esa página, cargamos la lista del servidor
        resolve: {
            contactos: contactos_resolve_service_1.ContactosResolve
        }
    },
    {
        path: 'nuevo-contacto',
        component: nuevo_contacto_component_1.NuevoContactoComponent
    },
    {
        //Si se equivoca escribiendo la ruta le redirigimos a la home
        path: '**',
        redirectTo: '/mis-contactos'
    }
];
// Creamos un nuevo módulo de routing a partir de las rutas definidas
var moduloConRutas = router_1.RouterModule.forRoot(rutas);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [moduloConRutas],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map