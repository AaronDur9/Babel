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
//Con [] puedo añadir o modificar propiedades de los elementos.
//Con () me subscribo a un evento concreto del elemento.
var AppComponent = (function () {
    function AppComponent() {
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
    ;
    //No necesito añadir function porque es un método de una clase
    //Binding de estilos
    AppComponent.prototype.obtenerColor = function () {
        return 'green';
    };
    //Lo que duelve no es de tipo Object porque el tipo Object es el padre de todos los objetos (solo hay un Object del que heredan todos los objetos).
    AppComponent.prototype.obtenerEstilos = function () {
        //Las propiedades css en Angular hay que escribirlas sin guiones y con mayúsculas
        return {
            backgroundColor: 'red',
            color: 'white'
        };
    };
    AppComponent.prototype.mostrarMensaje = function () {
        alert('Hola R.M.');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hello {{name}}</h1>\n  <h2> Y el n\u00FAmero de la suerte es: {{numeroDeLaSuerte}}</h2>\n  <textarea [rows]=\"textAreaLineas\"></textarea>\n  <div [class.caja]=\"pintamosClase\"></div>\n  <div [ngClass]=\"clases\"></div>\n  <p [style.color]=\"obtenerColor()\">buenos d\u00EDas</p>\n  <p [ngStyle]=\"obtenerEstilos()\">buenas tardes</p>\n  <button (click)=\"mostrarMensaje()\">Mostrar mensaje</button>\n  <input [(ngModel)]=\"mensaje\" type=\"text\"/>\n  {{ mensaje}}\n  ",
        styles: ["\n    .caja {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map