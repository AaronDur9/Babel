'use strict';

//Hacemos función asíncrona
function escribeTras2Segundos(texto, callback) {

    setTimeout(function() {
        console.log('texto' + texto);
        //Al terminar llamamos al callback para avisar de que hemos terminado.
        callback();
    }, 2000);
}

/**/
function serie(arr, fn, callback) {
    if (arr.length === 0) {
        callback();
        return;
    }
    //arr.shift quita el primer elemento del array y lo devuelve (así se lo pasamos a la función como parámetro)
    fn(arr.shift(), function() {
        serie(arr, fn, callback);
    });
}



//Ejecutamos nuestro código
serie([1, 2, 3, 4, 5], escribeTras2Segundos, function() {
    console.log('fin');
});
