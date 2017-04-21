// --ESTO ES EL CONTROLADOR DE USUARIOS

'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken');
const config = require('../../config');


module.exports = router;

router.post('/login', (req,res,next) => {
    //Recibimos credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    //Buscamos al usuario en la BD
    Usuario.findOne({email: email}).exec((err, usuario) => {
        if(err) {
            next(err);
            return;
        }
        if(!usuario){
            res.json({success:false, error: 'Credenciales incorrectas'});
            return;
        }
        //Si existe, comprobamos su clave
        if(clave !== usuario.clave){
            res.json({success:false, error: 'Credenciales incorrectas'});
            return;    
        }
        //Si la clave coincide, creamos un token  JWT
        jwt.sign({usuario_id: usuario._id}, config.jwtSecret, config.jwtConfig
        , (err,token) => {
            if(err) {
                next(err);
                return;
            }
            //Se lo devolvemos
            res.json({success:true, token:token})
        });
        
        
    });
});
