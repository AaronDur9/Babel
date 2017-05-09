import { Component} from '@angular/core';

@Component({
    selector: 'ejemplos-pipe',
    template: `
        <div>
        <strong>Pipa de Fechas:</strong> {{ fecha | date:'dd/MM/yyyy' }}<br>
        <strong>Pipa de moneda:</strong> {{ precio | currency: 'EUR':true }}<br>
         <strong>Pipa de texto:</strong> {{ texto | titlecase }}<br>
         <strong>Pipa de json:</strong> <pre>{{ object | json }}</pre>
        </div>
    `
})

export class EjemplosPipeComponent{
    fecha: Date = new Date();

    precio: number = 34.95;

    texto: string = 'texto que estaba en minusculas';

    object: any = {
        selecto: 'date',
        zzz: 222,
        fecha: new Date()
    };

}