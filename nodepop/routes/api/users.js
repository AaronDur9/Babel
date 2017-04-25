'use strict';



const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');


const jwt = require('jsonwebtoken');
const config = require('../../config');

//const customError = require('../../modules/customError.js');

// GET /api/users
router.get('/', function(req, res, next) {
    User.findOne({}).exec((err, users) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ successs: true, result: users });
    });
});

//Método de autenticación de los usuarios 
//Recibimos en un post el email y la contraseña
// POST /api/users/login
router.post('/login', (req, res, next) => {
    //Recibimos credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    //Buscamos al usuario en la BD
    User.findOne({ email }).exec((err, user) => {
        if (err) {
            next(err);
            return;
        }
        if (!user) {
            res.json({ success: false, error: 'El email de usuario no existe' });
            return;
        }
        //Si existe, comprobamos su clave
        if (clave !== user.password) {
            res.json({ success: false, error: 'Contraseña incorrecta' });
            return;
        }
        //Si la clave coincide, creamos un token  JWT
        jwt.sign({ user_id: user._id }, config.jwtSecret, config.jwtConfig, (err, token) => {
            if (err) {
                next(err);
                return;
            }
            //Se lo devolvemos
            res.json({ success: true, token: token })
        });
    });
});


module.exports = router;