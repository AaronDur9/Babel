'use strict';

const fs = require('fs');
//path.join se encarga de añaidr y eliminar barras inclinadas
const path = require('path');
//función que lea la versión de un módulo.
function versionModulo(nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');
    fs.readFile(fichero, 'utf-8', function(err, datos) {
        if (err) {
            callback(err);
            return;
        } else {
            const packageJson = JSON.parse(datos);

            //LLamamos al callback
            callback(null, packageJson.version);
        }
    });

}










//Llamamos a la función
versionModulo('chance', function(err, version) {
    if (err) {
        console.log('Error! ', err);
        return;
    }

    console.log('La version de chance es: ', version);
});
