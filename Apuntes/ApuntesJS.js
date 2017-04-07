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
