var obj = {
    nombre: 'Pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '!';
    }
};


obj.nombre;
obj.saludo;
obj["saludo"](); //Devuelve "Hola, Pepito"
var fn = obj["saludo"]; //Devuelve "Hola, undefined"
fn();

/*
El contexto de una función se define en tiempo de ejecución.
Al llamar a fn() no digo cual es el contexto de la función, por lo que utiliza el contexto global, donde nombre no tiene ningún valor.

Se podría solucionar con fn.call(obj)-> Al utilizar call le indico el contexto en el que debe ejecutarse la función
 */
