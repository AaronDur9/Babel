import { Component } from '@angular/core';


@Component({
    selector: 'ejemplos-componentes',
    templateUrl: '/app/Ejemplos/ejemplos-componentes.component.html'
})
export class EjemplosComponentesComponent {

    
  escribeMensaje(mensaje:string): void {
    console.log(mensaje);
  }

}