// --ESTO ES EL MODELO DE AGENTES

'use strict';

const mongoose = require('mongoose');

//Creamos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        index: true
    }
});


//Creamos método estático en el modelo
//para recuperar lista de agentes según unos filtros
agenteSchema.statics.list = function(criterios,limit,skip,select,sort,callback) {
    

    const query = Agente.find(criterios);
    query.limit(limit);
    query.skip(skip);
    query.exec(callback);
    query.select(select);
    query.sort(sort);

    //Lo anterior es igual que ...
    //Agente.find(criterios).limit(limit).exec(callback);
}




//Creamos el modelo de Agente
//Mongoose coge el nombre que le pasas de la colección, lo pone en minúsculas y lo pluraliza
//Le hemos pasado Agente para que lo transforme en agentes
var Agente = mongoose.model('Agente', agenteSchema);

//También podemos pasarle un tercer argumento para que utilice ese nombre exacto
//mongoose.model('Agente', agenteSchema, 'agentes');

//No necesitamos exportar el modelo porque 
//podemos recuperarlo donde queramos con 
// mongoose.model('Agente')
