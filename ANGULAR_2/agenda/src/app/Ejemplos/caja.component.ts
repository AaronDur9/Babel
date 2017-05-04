import { Component, Input, Output , EventEmitter } from '@angular/core';


@Component({
    selector: 'caja',
    template: `
    <div [style.backgroundColor]="color"
    (mouseenter)="notificar()"></div>
    `,
    styles: [`
    div {
        width: 100px;
        height: 100px;
    }
    `]

})
export class CajaComponent {

	//Utilizando el decorador Input conseguimos que este color se modifique si al crear un elemento de tipo caja
	//se le asigna un color
	//Ejemplo: <caja color="blue"></caja>
	@Input() color: string = 'red';

	//Definimos un emisor de eventos hacia el padre
	@Output() encima: EventEmitter<string> = new EventEmitter();

	//Emitimos un evento al padre
	notificar() {
			this.encima.emit(`EL color de la caja es ${this.color}`);
	}

}