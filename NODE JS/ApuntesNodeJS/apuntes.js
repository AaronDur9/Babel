//mozilla Developer Network para documentación sobre JS





//De esta forma ejecutamos una función de manera asíncrona
function suma(a, b, callback) {
    const resultado = a + b;
    setTimeout(function() {
        callback(resultado);
    }, 2000);

}


suma(4, 7, function(res) {
    console.log(res);
});


console.log('fin');



/////////////////////////////////////////////////////
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




/////////////////////////////////////////////////////////////////
//Hacemos función asíncrona
function escribeTras2Segundos(texto, callback) {

    setTimeout(function() {
        console.log('texto' + texto);
        //Al terminar llamamos al callback para avisar de que hemos terminado.
        callback();
    }, 2000);
}

/*Vamos a crear una función serie que le digamos cuantas veces debe llamar a fn, y recibirá un callback al que llamará cuando haya termiando*/
/*Esta función nos ayuda a simular un bucle para ejecutar cosas de manera asíncrona en serie. */
function serie(veces, fn, callback) {
    if (veces === 0) {
        callback();
        return;
    }
    veces--;
    fn(veces, function() {
        serie(veces, fn, callback);
    });
}



//Ejecutamos nuestro código
serie(5, escribeTras2Segundos, function() {
    console.log('fin');
});
