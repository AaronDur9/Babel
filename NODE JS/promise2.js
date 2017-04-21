'use strict';


//Encadenando promesas 

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}


function conAjo(plato) {
    return new Promise((resolve,reject) => {
        resolve(plato + ' ajo');
    });
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}

const paella = 'paella con';


// Para encadenar, cada function recibe el dato y devuelve una promesa
//para que el siguiente .then() la escuche 
conArroz(paella)
    .then(conAjo)
    .then( (plato) => {
        //Como recibe un parámetro adicional a parte de plato necesitamos definir otra función que llame
        //a la función con pasándole el ingrediente
        return con(plato, 'cigalas');   
    })
    .then((plato) => {
        console.log(plato);
    });

