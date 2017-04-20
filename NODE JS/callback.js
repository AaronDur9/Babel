'use strict';

//Hacemos función asíncrona
function escribeTras2Segundos(texto, callback) {

    setTimeout(function() {
        console.log(texto);
        //Al terminar llamamos al callback para avisar de que hemos terminado.
        callback();
    }, 2000);
}

//Cuando termina de ejecutar la función, llama al callback
escribeTras2Segundos('texto1', function() {

    //Esta es la función que le pasamos como callback
    escribeTras2Segundos('texto2', function() {
        //Esto será lo último que ejecute la función.
        console.log('fin');
    });

});
