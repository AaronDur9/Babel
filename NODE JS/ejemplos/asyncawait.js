'use strict';

// Función que devuelva una promesa

const sleep = ms => new Promise(resolve => setTimeout(() => {

    resolve('Esperado');

}
, ms));

/* -- Esa línea es igual que esto
function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            //Cuando pasen los segundos que nos indican llamamos a la función resolve
            //(que es lo que se ejecuta cuando todo va bien)
            resolve();
        }, ms)
    });
}*/


//Consumo la promesa
//Cuando la promesa se cumple se ejecuta el then
/*
sleep(2000).then(() => {
    console.log('terminado');
});
*/

//Con await cuando la promesa se cumple se ejecuta lo que hay debajo
//Hasta que no se cumpla no ejecuta nada de lo que hay debajo
async function main() {
    for(let i = 0; i < 5; i++) {
        const resultado = await sleep(2000);
        console.log('terminado', resultado);
    }
}

main().catch(err => {
      console.log('Hubo un error', err);  
    });