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
*/

////////////////////////////
immediately invoked

function(iif)
(function() {
    var casa;
    var pepe;



})();
/////////////////////////////

//Si usamos JQuery deberíamos meter nuestro código

$(document).ready(function() {
    //Se ejecuta cuando el DOM está cargado
});





BOM - API para acceder a cierta información del usuario con javascript, como el tamaño de pantalla y las funciones del ordenador que podemos acceder.



//Se ejecuta la función que pasemos a los 3 segundos.
//setInterval es igual pero cada 3 segundos vuelve a llamar a la función.
var timeout = setTimeout(function() {
    alert('hola');
}, 3000);

clearTimeout(timeout);




//Otros 2 ejemplos de contextos de clausura
//En este se muestra un 5 cinco veces porque la función de dentro se ejecuta al final cuando ya ha terminado de ejecutar el bucle.
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}



//El comportamiento de este ejemplo es el que esperamos ya que al hacer una función auto invocada que devuelve otra función con su propio contexto
//lo que ocurre es que en cada iteración forzamos que se ejecute y devuelve una función con la i correcta, y al final del bucle cuando se ejecute
//se mostrará la i correcta.
for (var i = 0; i < 5; i++) {
    setTimeout((function(index) {
        return function() {
            console.log(index);
        };
    })(i), i * 1000);
}


///////////////////JQUERY/////////////////////////////

//Eventos de botón
//Modifico el color del botón pulsado.
//
$('button').click(function(event) {
    console.log(event);
    //$('nav a').css('color', 'green');
    $(this).css('color', 'red');
    //Estas dos hacen lo mismo
    $(event.target).css('color', 'red');
});

//Eventos mouseOver
//
$('.nav-item a').mouseover(function() {
    //Se ejecuta cuando pasas por encima del elemento.
});




////////////////////AJAX/////////////////////////
//Nos sirve para que el usuario pueda hacer peticiones asíncronas (mandar info al servidor)
//sin que al pulsar el botón de un formulario se actualice y cambie toda la página.
//Nosotros controlamos lo que se modifica



//Para esto vamos a utilizar el formato JSON
//http://jsoneditoronline.org/ -> Editor online




//Backend de prueba para hacer peticiones AJAX
//
https: //jsonplaceholder.typicode.com/



    //Capa de servicio para comunicarnos con un backend
    var data = {
        'userId': 1,
        'title': 'My post',
        'body': 'post body'
    };

var services = {
    root: 'https://jsonplaceholder.typicode.com',
    getPosts: getPosts,
    createPost: createPost,
    updatePost: updatePost
};

function getPosts(postId) {
    return $.ajax({
        type: 'GET',
        dataType: 'json',
        url: this.root + '/posts/' + postId
    });
}

function createPost(data) {
    return $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: this.root + '/posts',
        data: JSON.stringify(data)
    });
}

function updatePost(id, data) {
    return $.ajax({
        type: 'PUT',
        contentType: 'application/json; charset=utf-8',
        url: this.root + '/posts' + id,
        data: JSON.stringify(data)
    });
}

function deletePost(id) {
    return $.ajax({
        type: 'DELETE',
        url: this.root + '/posts' + id
    });
}

services.createPost(data).then(function(response) {
    console.log('POST', response);
    return services.getPosts(1);
}).then(function(response) {
    console.log('GET', response);
}).catch(function(error) {
    console.error('POST', error);
});
