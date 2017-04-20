'use strict';

/*CONTEXTOS DE CLAUSURA*/

const creaAgente = function(nombre) {
    let edad = 0;
    return {
        setNombre: function(valor) {
            nombre = valor;
        },
        getNombre: function() {
            return nombre;
        },
        saluda: function() {
            console.log('Hola soy', nombre);
        }
    };

};


const neo = creaAgente('Neo');

console.log(neo.getNombre());

const trinity = creaAgente('Trinity');

console.log(neo.getNombre(), trinity.getNombre());


//Cuando utilizábamos this con este ejemplo del timeout nos aparecía undefined
//Ya que se ejecutaba en el contexto del timeout, pero con los closure el contexto se guarda y no se pierde.
setTimeout(neo.saluda, 2000);
