'use strict';

//Carga el módulo
const EventEmitter = require('events');

//Lama al constructor y crea una instancia
const eventEmitter = new EventEmitter();


function suenaTelefono(quien) {
    if (quien === 'madre') {
        return;
    }
    console.log('ring ring');
}

function vibrarTelefono() {
    console.log('brrr brrr');
}


//Cuando salte el evento "llamar telefono" que se ejecuten estos dos métodos
eventEmitter.on('llamar telefono', suenaTelefono);
eventEmitter.on('llamar telefono', vibrarTelefono);

//lanzamos el evento con el parámetro 'madre'
eventEmitter.emit('llamar telefono', 'madre');


/*
Para que nuestros objetos puedan lanzar y reaccionar a eventos podemos hacer que estos hereden del eventEmitter
 */
