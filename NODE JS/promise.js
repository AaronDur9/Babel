'use strict';

// función que retorna una promesa
//Si hacemos una función que retorna una promesa, la primera línea hace exactamente eso
function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {

            if(true) {
                reject(new Error('Fatal de la vida'));
                return;
            }
            //Cuando pasen los segundos que nos indican llamamos a la función resolve
            //(que es lo que se ejecuta cuando todo va bien)
            resolve();
        }, ms)
    });
}


//Consumimos las función que devuelve una promesa
const promesa = sleep(2000);

console.log(promesa);


promesa.then(() => {
    console.log('Promesa cumplida');
}).catch((err) => {
    console.log('Error', err);
});