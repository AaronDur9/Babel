// --ESTO ES EL MODELO DE USUARIO

'use strict';

const mongoose = require('mongoose');

//Creamos un esquema
const usuarioSchema = mongoose.Schema({
    email: {
        String,
        unique: true,
        index:true
    },
    clave: String
});


mongoose.model('usuario', usuarioSchema);