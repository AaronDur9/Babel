"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EjemplosBindingComponent = (function () {
    function EjemplosBindingComponent() {
        this.name = 'Babel';
        this.mensaje = 'cámbiame';
        this.numeroDeLaSuerte = 43;
        //Binding de propiedades
        this.textAreaLineas = 6;
        //Binding de clases css (Cuando está a true se incluye la clase "caja" al div).
        this.pintamosClase = true;
        //El segundo div definido tendrá tantas clases como propiedades este objeto a true.
        this.clases = { uno: true, dos: true };
    }
    //No necesito añadir function porque es un método de una clase
    //Binding de estilos
    EjemplosBindingComponent.prototype.obtenerColor = function () {
        return 'green';
    };
    //Lo que duelve no es de tipo Object porque el tipo Object es el padre de todos los objetos (solo hay un Object del que heredan todos los objetos).
    EjemplosBindingComponent.prototype.obtenerEstilos = function () {
        //Las propiedades css en Angular hay que escribirlas sin guiones y con mayúsculas
        return {
            backgroundColor: 'red',
            color: 'white'
        };
    };
    EjemplosBindingComponent.prototype.mostrarMensaje = function () {
        alert('Hola R.M.');
    };
    return EjemplosBindingComponent;
}());
EjemplosBindingComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-binding',
        templateUrl: '/app/Ejemplos/ejemplos-binding.component.html',
        styles: ["\n    .caja {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n    }\n  "]
    })
], EjemplosBindingComponent);
exports.EjemplosBindingComponent = EjemplosBindingComponent;
//# sourceMappingURL=ejemplos-binding.component.js.map