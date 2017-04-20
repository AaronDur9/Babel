'use strict';



const basicAuth = require('basic-auth');


//Este módulo exporta una función que recibe usuario y contraseña
module.exports = function(usuario, password) {

    //La función devuelve un middleware de autenticación
    return (req,res,next) => {
    //Pedimos a basic Auth que intente sacar credenciales
    const user = basicAuth(req);
    console.log({user});
    if(!user || user.name !== usuario || user.pass !== password) {
        //Si no tiene credenciales, respondemos con una cabecera que las pida
        res.set('WWW-authenticate', 'Basic realm=Authorization Required');
        res.send(401);
        return;
    }
    next();    
    }
}



