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



/*
Si quiero agregar varios elementos al html no lo hago dentro del bucle, sino que los acumulo y los añado una únnica vez.
 */

var compraListNodeVirtual = document.createElement('ul');
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    compraListNodeVirtual.appendChild(a);
});
compraListNode.appendChild(compraListNodeVirtual);




/*
Cuando utilizas métodos como "document.querySelectorAll('.nav a');" lo que te devuelve es una lista de nodos, que no tiene disponible los métodos de Array
Cómo transformar una lista de nodos en un array?

La palabra reservada arguments siempre está disponible en una función y es una lista de nodos con todos los argumentos de la función
 */

var array = document.querySelectorAll('.nav a');
var newArray = Array.prototype.slice.call(array, 0);
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray() {
    console.log(arguments);
}

argumentsArray(1, 2, 4, 'string');




/*
Creamos un listener que ejecute la función pasada como segundo parámetro cuando pulsen el botón.
En este caso utilizamos una función que devuelve otra para crear un contexto de clausura.
Esto nos sirve para obligar a que la 'i' esté en el contexto y muestre la correspondiente n cada iteración del for
 */
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
        return function() {
            console.log(i);
        };
    })(i));


    document.body.appendChild(btn);
}


/*
Todos nuestros archivos javascript vamos a meterlos dentro de un contexto de clausura como este para asegurarnos que nuestras variables nunca salen de nuestro contexto
Conseguimos que nuestras dos variables globales casa y pepe no colisiones con otras que puedan llamarse igual en otros ficheros javascript.


////////////////////////////
immediately invoked function (iif)
(function() {
var casa;
var pepe;



})();
/////////////////////////////
 */
