'use strict';

const fs = require('fs');
const async = require('async');

//Require utiliza rutas relativas a este fichero
const versionModulo = require('./versionModulo');

function versionModulos(callback) {

    //Esta ruta es relativa a la raíz del proyecto.
    fs.readdir('./node_modules', function(err, lista) {
        if (err) {
            callback(err);
            return;
        }
        //console.log(lista);

        //Para cada string de la lista ejecutamos versionModulo.
        //Concat recibe: un array, la funcióna  ejecutar con cada elemento de este y un callback final.
        async.concat(lista,

            //Iterador (función a realizar sobre todos los elementos de la lista)
            function iterador(elemento, callbackIterador) {
                if (elemento === '.bin') {
                    callbackIterador(null);
                    return;
                }
                versionModulo(elemento, function(err, version) {
                    if (err) {
                        callbackIterador(err);
                        return;
                    }
                    //Ya tenemos la versión del módulo, se la devolvemos al callbackIterator
                    callbackIterador(null, { version: version, modulo: elemento });
                    return;
                });

            },
            //Finalizador
            /*function finalizador(err, resultados) {
                if (err) {
                    return;
                }
                console.log('resultados', resultados);

            }*/
            callback);
    });
}


versionModulos(function(err, datos) {
    if (err) {
        console.log('hubo un error', err);
        return;
    }

    console.log('Los modulos son:', datos);

});
