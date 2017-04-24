'use strict';

function Persona(nombre) {
    this.nombre = nombre;

}


const persona = new Persona('Neo');


/*JS nos permite añadir métodos y atributos a todos los objetos de un tipo en tiempo de ejecución
Para hacerlo solo tenemos que añadírselo al prototipo del padre
--También podemos añadírselo a un único objeto*/

Persona.prototype.saluda = function() {
    console.log('Hola me llamo', this.nombre);
};

//persona.saluda();



//////HERENCIA////////////

function Agente(nombre) {
    //De esta forma ejecutamos el constructor de Persona con el this de Agente
    //Esto es como llamar a super en otros lenguajes
    Persona.call(this, nombre);

}

//Asignamos como prototipo de Agente a una persona
//Así conseguimos que todos los agentes tengan los métodos que hay en el prototipo de persona.
Agente.prototype = new Persona('soy un prototipo');

const agente = new Agente('Smith');
//De modo que para hacer HERENCIA se necesitan hacer dos cosas:
//1- Utilizar el constructor del padre. 
//2- Heredar el prototipo del padre.



// ------- HERENCIA MÚLTIPLE

function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    };

    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva balas');
    };
}

// Asginar todas las propiedades (y métodos) de un superhéroe al
// prototipo de agente
Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();



//De esta forma puedes conseguir que un único objeto herede de otro, y no todos los de su tipo.
Object.assign(agente, new Superheroe());
