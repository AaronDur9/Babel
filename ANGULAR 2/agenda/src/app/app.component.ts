import { Component } from '@angular/core';

//Con [] puedo añadir o modificar propiedades de los elementos.
//Con () me subscribo a un evento concreto del elemento.
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <h2> Y el número de la suerte es: {{numeroDeLaSuerte}}</h2>
  <textarea [rows]="textAreaLineas"></textarea>
  <div [class.caja]="pintamosClase"></div>
  <div [ngClass]="clases"></div>
  <p [style.color]="obtenerColor()">buenos días</p>
  <p [ngStyle]="obtenerEstilos()">buenas tardes</p>
  <button (click)="mostrarMensaje()">Mostrar mensaje</button>
  <input [(ngModel)]="mensaje" type="text"/>
  {{ mensaje}}
  `,
  styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})
export class AppComponent  { 

  name = 'Babel';
  mensaje: string = 'cámbiame';
  numeroDeLaSuerte: number = 43;

  //Binding de propiedades
  textAreaLineas: number = 6;

  //Binding de clases css (Cuando está a true se incluye la clase "caja" al div).
  pintamosClase: boolean = true;

  //El segundo div definido tendrá tantas clases como propiedades este objeto a true.
  clases: any = {uno:true, dos:true};




  constructor() {

  };

  //No necesito añadir function porque es un método de una clase
  //Binding de estilos
  obtenerColor(): string {
    return 'green';
  }

  //Lo que duelve no es de tipo Object porque el tipo Object es el padre de todos los objetos (solo hay un Object del que heredan todos los objetos).
  obtenerEstilos(): any {
    //Las propiedades css en Angular hay que escribirlas sin guiones y con mayúsculas
    return {
      backgroundColor: 'red', //background-color
      color: 'white'
    }
  }

  mostrarMensaje(): void {
    alert('Hola R.M.');
  }

 }
