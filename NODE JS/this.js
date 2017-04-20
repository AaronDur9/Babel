function Coche() {

    this.ruedas = 4;
    this.cuantasRuedas = function() {
        console.log('tiene', this.ruedas);
    };
}


const coche = new Coche();

coche.cuantasRuedas();

//const numRuedas = coche.cuantasRuedas;

//numRuedas();
//setTimeout(coche.cuantasRuedas, 2000);
//
//Ambas devuelven Tiene undefined porque el contexto  en el que se ejecutan no es el del coche.

/*
Para mantener el contexto hay que pensar que:
- El this de un método es lo que tiene a la izquierda siempre que al final pongas el ().

*/

const camion = {
    ruedas: 8,
    cuantasRuedas: coche.cuantasRuedas
}

camion.cuantasRuedas();

//Dirá que tiene 8 ruedas


//El método bind hace que enlaces a un método con un contexto y siempre que lo ejecutes lo hará ene se contexto.
const numRuedas = coche.cuantasRuedas.bind(coche);
numRuedas();


//Podríamos pasar argumentos fijos al método cuantasRuedas.
const numRuedas = coche.cuantasRuedas.bind(coche, a, b);


/*La diferencia que tiene call de bind es que con call se llama al método en ese instante.*/
coche.cuantasRuedas.call(camion);
