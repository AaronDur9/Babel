import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-binding',
    templateUrl: './ejemplos-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})
export class EjemplosBindingComponent {
  name = 'Babel';
  mensaje: string = 'cámbiame';
  numeroDeLaSuerte: number = 43;

  //Binding de propiedades
  textAreaLineas: number = 6;

  //Binding de clases css (Cuando está a true se incluye la clase "caja" al div).
  pintamosClase: boolean = true;

  //El segundo div definido tendrá tantas clases como propiedades este objeto a true.
  clases: any = {uno:true, dos:true};



  
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